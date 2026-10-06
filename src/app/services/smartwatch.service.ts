import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Capacitor, registerPlugin } from '@capacitor/core';
import { environment } from '../../environments/environment';

export interface SmartwatchStatus {
  supported: boolean;
  isPaired: boolean;
  isWatchAppInstalled: boolean;
  isReachable: boolean;
}

export interface ScheduledMatchItem {
  id: string;
  reserva_id?: number;
  liga_partido_id?: number;
  tipo_origen: string;
  tipo_label: string;
  club_id: number;
  club_nombre: string;
  cancha_nombre: string;
  cancha_tipo?: string;
  fecha: string;
  fecha_formateada?: string;
  hora_inicio: string;
  hora_fin?: string;
  horario_texto: string;
  pareja1: string;
  pareja2: string;
  punto_oro: boolean;
  sets: number;
  es_hoy: boolean;
}

export interface MatchConfig {
  partido_id?: number;
  reserva_id?: number;
  liga_partido_id?: number;
  tipo_actividad?: string; // 'partido', 'entrenamiento', 'clase'
  club_nombre?: string;
  cancha_nombre?: string;
  pareja1: string;
  pareja2: string;
  punto_oro: boolean;
  sets: number;
  mano_reloj: 'derecha' | 'izquierda';
}

export interface StrokeData {
  golpe: string; // 'Smash', 'Bandeja', 'Víbora', 'Drive', 'Revés', 'Volea', 'Globo'
  velocidad_kmh: number;
  fuerza_g: number;
  timestamp: number;
}

export interface SmartwatchSessionSummary {
  id?: number;
  usuario_id: number;
  club_id?: number;
  club_nombre?: string;
  cancha_nombre?: string;
  liga_partido_id?: number;
  reserva_id?: number;
  tipo_actividad: string;
  mano_reloj: string;
  fecha_inicio: string;
  fecha_fin?: string;
  duracion_segundos: number;
  calorias_quemadas: number;
  fc_promedio: number;
  fc_maxima: number;
  total_golpes: number;
  smash_count: number;
  bandeja_count: number;
  vibora_count: number;
  drive_count: number;
  reves_count: number;
  volea_count: number;
  globo_count: number;
  velocidad_max_kmh: number;
  velocidad_media_kmh: number;
  marcador_final_t1?: string;
  marcador_final_t2?: string;
  equipo_ganador?: number;
  dispositivo_modelo?: string;
  golpes_detalle?: StrokeData[];
}

const PadelBloxWatch = registerPlugin<any>('PadelBloxWatch');

@Injectable({
  providedIn: 'root'
})
export class SmartwatchService {
  private api = environment.apiUrl;

  public status$ = new BehaviorSubject<SmartwatchStatus>({
    supported: false,
    isPaired: false,
    isWatchAppInstalled: false,
    isReachable: false
  });

  public isMatchActive$ = new BehaviorSubject<boolean>(false);
  public liveScore$ = new BehaviorSubject<any>(null);
  public lastStroke$ = new Subject<StrokeData>();
  public currentHeartRate$ = new BehaviorSubject<number>(0);
  public sessionCompleted$ = new Subject<SmartwatchSessionSummary>();

  public upcomingMatches$ = new BehaviorSubject<ScheduledMatchItem[]>([]);
  public activeMatch$ = new BehaviorSubject<ScheduledMatchItem | null>(null);

  constructor(private http: HttpClient) {
    this.initPluginListeners();
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'X-Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  private initPluginListeners(): void {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        PadelBloxWatch.addListener('scoreChanged', (data: any) => {
          console.log('[Smartwatch] Marcador actualizado desde Watch:', data);
          this.liveScore$.next(data);
          this.isMatchActive$.next(true);
        });

        PadelBloxWatch.addListener('strokeDetected', (data: any) => {
          this.lastStroke$.next(data);
        });

        PadelBloxWatch.addListener('heartRateSample', (data: any) => {
          if (data && data.heart_rate) {
            this.currentHeartRate$.next(data.heart_rate);
          }
        });

        PadelBloxWatch.addListener('workoutFinished', (summary: SmartwatchSessionSummary) => {
          this.isMatchActive$.next(false);
          this.sessionCompleted$.next(summary);
          // Auto sync with database
          this.syncSession(summary).subscribe({
            next: (res) => console.log('[Smartwatch] Sesión sincronizada con éxito en PadelBlox:', res),
            error: (err) => console.error('[Smartwatch] Error sincronizando sesión:', err)
          });
        });

        this.checkWatchConnection();
      } catch (err) {
        console.warn('[Smartwatch] No se pudo inicializar listeners del plugin:', err);
      }
    }
  }

  async checkWatchConnection(): Promise<SmartwatchStatus> {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        const res = await PadelBloxWatch.isWatchConnected();
        this.status$.next(res);
        return res;
      } catch (e) {
        console.error('Error comprobando conexión con Apple Watch:', e);
      }
    }

    const fallback: SmartwatchStatus = {
      supported: false,
      isPaired: false,
      isWatchAppInstalled: false,
      isReachable: false
    };
    this.status$.next(fallback);
    return fallback;
  }

  async syncMatchesToWatch(matches: ScheduledMatchItem[], userName: string = 'Jugador PadelBlox'): Promise<boolean> {
    this.upcomingMatches$.next(matches);
    if (matches.length > 0) {
      this.activeMatch$.next(matches[0]);
    }

    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        await PadelBloxWatch.syncUpcomingMatches({
          usuario_nombre: userName,
          proximos_partidos: matches
        });
        return true;
      } catch (err) {
        console.error('Error enviando partidos a Apple Watch:', err);
      }
    }
    return true;
  }

  async startMatch(config: MatchConfig): Promise<boolean> {
    this.isMatchActive$.next(true);
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        await PadelBloxWatch.startMatchSession(config);
        return true;
      } catch (err) {
        console.error('Error iniciando sesión en Watch:', err);
      }
    }
    return true;
  }

  async updateScore(puntosT1: string, puntosT2: string, g1: number, g2: number, s1: number, s2: number, saqueEquipo: number = 1): Promise<void> {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        await PadelBloxWatch.updateScore({
          puntos_t1: puntosT1,
          puntos_t2: puntosT2,
          games_t1: g1,
          games_t2: g2,
          sets_t1: s1,
          sets_t2: s2,
          saque_equipo: saqueEquipo
        });
      } catch (e) {
        console.error('Error enviando marcador al Watch:', e);
      }
    }
  }

  async stopMatch(): Promise<any> {
    this.isMatchActive$.next(false);
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
      try {
        return await PadelBloxWatch.stopMatchSession();
      } catch (err) {
        console.error('Error deteniendo sesión en Watch:', err);
      }
    }
    return { success: true };
  }

  // --- API Backend Sync ---

  getProximosPartidos(userId?: number): Observable<any> {
    const uParam = userId ? `?usuario_id=${userId}` : '';
    const url = `${this.api}/smartwatch/get_proximos_partidos.php${uParam}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  syncSession(session: Partial<SmartwatchSessionSummary>): Observable<any> {
    const url = `${this.api}/smartwatch/sync_session.php`;
    return this.http.post(url, session, { headers: this.getHeaders() });
  }

  getUserStats(userId: number, limit: number = 20): Observable<any> {
    const url = `${this.api}/smartwatch/get_stats.php?usuario_id=${userId}&limit=${limit}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getMatchStats(ligaPartidoId: number): Observable<any> {
    const url = `${this.api}/smartwatch/get_stats.php?liga_partido_id=${ligaPartidoId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getSessionDetail(sesionId: number): Observable<any> {
    const url = `${this.api}/smartwatch/get_stats.php?sesion_id=${sesionId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
}
