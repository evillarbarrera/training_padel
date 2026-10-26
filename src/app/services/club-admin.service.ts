import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface RecursoCategoria {
  id: string;
  nombre: string;
  icono: string;
  badgeLabel: string;
  colorHex: string;
  bgHex: string;
  grupo: 'padel' | 'juegos' | 'amenities' | 'equipamiento' | 'otro';
}

export const RECURSOS_CATEGORIAS: RecursoCategoria[] = [
  {
    id: 'cancha_padel',
    nombre: 'Cancha de Pádel',
    icono: '🎾',
    badgeLabel: 'PÁDEL',
    colorHex: '#10b981',
    bgHex: '#ecfdf5',
    grupo: 'padel'
  },
  {
    id: 'cancha_pickleball',
    nombre: 'Pickleball',
    icono: '🏓',
    badgeLabel: 'PICKLEBALL',
    colorHex: '#84cc16',
    bgHex: '#f7fee7',
    grupo: 'padel'
  },
  {
    id: 'mesa_pool',
    nombre: 'Pool / Billar',
    icono: '🎱',
    badgeLabel: 'POOL',
    colorHex: '#8b5cf6',
    bgHex: '#f5f3ff',
    grupo: 'juegos'
  },
  {
    id: 'mesa_pingpong',
    nombre: 'Ping Pong',
    icono: '🏓',
    badgeLabel: 'PING PONG',
    colorHex: '#f97316',
    bgHex: '#fff7ed',
    grupo: 'juegos'
  },
  {
    id: 'futbolito',
    nombre: 'Futbolito / Taca Taca',
    icono: '⚽',
    badgeLabel: 'TACA TACA',
    colorHex: '#16a34a',
    bgHex: '#f0fdf4',
    grupo: 'juegos'
  },
  {
    id: 'zona_lounge',
    nombre: 'Zona Lounge & PS5',
    icono: '🎮',
    badgeLabel: 'LOUNGE',
    colorHex: '#ec4899',
    bgHex: '#fdf2f8',
    grupo: 'juegos'
  },
  {
    id: 'quincho',
    nombre: 'Quincho / Asador',
    icono: '🍖',
    badgeLabel: 'QUINCHO',
    colorHex: '#ea580c',
    bgHex: '#fff1f2',
    grupo: 'amenities'
  },
  {
    id: 'sala_eventos',
    nombre: 'Salón de Eventos',
    icono: '🎉',
    badgeLabel: 'EVENTOS',
    colorHex: '#d97706',
    bgHex: '#fffbeb',
    grupo: 'amenities'
  },
  {
    id: 'maquina_lanzapelotas',
    nombre: 'Máquina Lanzapelotas',
    icono: '🤖',
    badgeLabel: 'LANZAPELOTAS',
    colorHex: '#0284c7',
    bgHex: '#f0f9ff',
    grupo: 'equipamiento'
  },
  {
    id: 'otro',
    nombre: 'Espacio Recreativo',
    icono: '✨',
    badgeLabel: 'ESPACIO',
    colorHex: '#64748b',
    bgHex: '#f8fafc',
    grupo: 'otro'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ClubAdminService {
  private apiUrl = environment.apiUrl.replace(/\/+$/, '');
  private clubesCache = new Map<string, any[]>();
  private canchasCache = new Map<number, any[]>();

  public readonly categoriasRecursos = RECURSOS_CATEGORIAS;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  getCategoryMeta(categoriaId?: string): RecursoCategoria {
    const cat = (categoriaId || '').toLowerCase().trim();
    const found = this.categoriasRecursos.find(c => c.id === cat);
    if (found) return found;

    if (cat.includes('pool') || cat.includes('billar')) {
      return this.categoriasRecursos.find(c => c.id === 'mesa_pool')!;
    }
    if (cat.includes('ping') || cat.includes('tenis de mesa')) {
      return this.categoriasRecursos.find(c => c.id === 'mesa_pingpong')!;
    }
    if (cat.includes('futbolito') || cat.includes('taca')) {
      return this.categoriasRecursos.find(c => c.id === 'futbolito')!;
    }
    if (cat.includes('lounge') || cat.includes('ps5') || cat.includes('gamer') || cat.includes('juego')) {
      return this.categoriasRecursos.find(c => c.id === 'zona_lounge')!;
    }
    if (cat.includes('quincho') || cat.includes('asador') || cat.includes('bbq')) {
      return this.categoriasRecursos.find(c => c.id === 'quincho')!;
    }
    if (cat.includes('evento') || cat.includes('salon') || cat.includes('cumple')) {
      return this.categoriasRecursos.find(c => c.id === 'sala_eventos')!;
    }
    if (cat.includes('maquina') || cat.includes('lanzapelotas')) {
      return this.categoriasRecursos.find(c => c.id === 'maquina_lanzapelotas')!;
    }
    if (cat.includes('pickle')) {
      return this.categoriasRecursos.find(c => c.id === 'cancha_pickleball')!;
    }
    return this.categoriasRecursos[0];
  }

  // --- CLUBES ---
  getClubesAdmin(adminId?: number, forceRefresh: boolean = false): Observable<any[]> {
    const cacheKey = adminId ? `admin_${adminId}` : 'all';
    if (!forceRefresh && this.clubesCache.has(cacheKey)) {
      return of(this.clubesCache.get(cacheKey)!);
    }

    let url = `${this.apiUrl}/clubes/get_clubes.php`;
    if (adminId) url += `?admin_id=${adminId}`;

    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      tap(res => {
        if (res) this.clubesCache.set(cacheKey, res);
      }),
      shareReplay(1)
    );
  }

  getClubHomeStats(adminId: number, clubId?: number, fecha?: string): Observable<any> {
    let url = `${this.apiUrl}/clubes/get_home_stats.php?admin_id=${adminId}`;
    if (clubId) url += `&club_id=${clubId}`;
    if (fecha) url += `&fecha=${fecha}`;
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  // --- CANCHAS ---
  getCanchas(clubId: number, forceRefresh: boolean = false): Observable<any[]> {
    if (!forceRefresh && this.canchasCache.has(clubId)) {
      return of(this.canchasCache.get(clubId)!);
    }

    return this.http.get<any[]>(`${this.apiUrl}/clubes/get_canchas.php?club_id=${clubId}`, {
      headers: this.getHeaders()
    }).pipe(
      tap(res => {
        if (res) this.canchasCache.set(clubId, res);
      }),
      shareReplay(1)
    );
  }

  // --- RESERVAS ---
  getClubReservas(clubId: number, fecha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clubes/get_club_reservas.php?club_id=${clubId}&fecha=${fecha}`, {
      headers: this.getHeaders()
    });
  }

  addReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clubes/add_reserva.php`, reserva, {
      headers: this.getHeaders()
    });
  }

  updateReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clubes/update_reserva.php`, reserva, {
      headers: this.getHeaders()
    });
  }

  cancelReserva(payloadOrId: any): Observable<any> {
    const body = (typeof payloadOrId === 'object' && payloadOrId !== null) ? payloadOrId : { reserva_id: payloadOrId };
    return this.http.post<any>(`${this.apiUrl}/clubes/cancel_reserva.php`, body, {
      headers: this.getHeaders()
    });
  }

  // --- INVENTARIO / POS ---
  getProductos(clubId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/inventario/get_productos.php?club_id=${clubId}`);
  }

  registrarVenta(venta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inventario/registrar_venta.php`, venta, {
      headers: this.getHeaders()
    });
  }

  // --- TURNOS DE PERSONAL / STAFF ---
  getClubTurnos(clubId: number, fechaInicio?: string, fechaFin?: string): Observable<any> {
    let url = `${this.apiUrl}/clubes/get_turnos.php?club_id=${clubId}`;
    if (fechaInicio && fechaFin) {
      url += `&fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`;
    }
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getClubStaff(clubId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clubes/get_staff.php?club_id=${clubId}`, {
      headers: this.getHeaders()
    });
  }

  saveClubTurno(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clubes/save_turno.php`, payload, {
      headers: this.getHeaders()
    });
  }

  togglePagoTurno(payload: { id: number; club_id: number; pagado: boolean | number; monto_pago?: number | null; metodo_pago?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clubes/toggle_pago_turno.php`, payload, {
      headers: this.getHeaders()
    });
  }

  // --- COMPETICIÓN / TORNEOS ---
  getTorneosAdmin(adminId: number, clubId?: number): Observable<any[]> {
    let url = `${this.apiUrl}/torneos/get_torneos_admin.php?admin_id=${adminId}`;
    if (clubId) url += `&club_id=${clubId}`;
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  getTorneoMatches(torneoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/torneos/get_matches.php?torneo_id=${torneoId}`, {
      headers: this.getHeaders()
    });
  }

  updateMatchResult(matchId: number, puntosT1: number, puntosT2: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/update_match_result.php`, {
      match_id: matchId,
      puntos_t1: puntosT1,
      puntos_t2: puntosT2
    }, {
      headers: this.getHeaders()
    });
  }

  getTorneoParticipantes(torneoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/torneos/get_participantes.php?torneo_id=${torneoId}`, {
      headers: this.getHeaders()
    });
  }

  closeTorneoAmericano(torneoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/close_americano.php`, {
      torneo_id: torneoId
    }, {
      headers: this.getHeaders()
    });
  }

  reopenTorneoAmericano(torneoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/reopen_americano.php`, {
      torneo_id: torneoId
    }, {
      headers: this.getHeaders()
    });
  }

  duplicateAmericano(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/duplicate_americano.php`, data, {
      headers: this.getHeaders()
    });
  }

  joinTorneoManual(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/join_torneo.php`, data, {
      headers: this.getHeaders()
    });
  }

  removeParticipante(participanteId: number, torneoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/remove_participante.php`, {
      participante_id: participanteId,
      torneo_id: torneoId
    }, {
      headers: this.getHeaders()
    });
  }

  generateMatches(torneoId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/torneos/generate_matches.php`, {
      torneo_id: torneoId
    }, {
      headers: this.getHeaders()
    });
  }

  // --- USUARIOS SEARCH ---
  getUsers(rol?: string, search?: string): Observable<any[]> {
    let url = `${this.apiUrl}/user/get_users.php?1=1`;
    if (rol) url += `&rol=${rol}`;
    if (search) url += `&search=${encodeURIComponent(search)}`;
    return this.http.get<any[]>(url, { headers: this.getHeaders() });
  }

  clearCache(): void {
    this.clubesCache.clear();
    this.canchasCache.clear();
  }
}
