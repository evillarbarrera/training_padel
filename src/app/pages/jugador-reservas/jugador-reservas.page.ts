import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { MysqlService } from '../../services/mysql.service';
import { PacksService } from '../../services/pack.service';
import { PackAlumnoService } from '../../services/pack_alumno.service';
import { IonicModule, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline, homeOutline, calendarOutline, logOutOutline, peopleOutline, locationOutline, searchOutline, closeOutline, checkmarkCircleOutline, personOutline, mailOutline, addOutline, callOutline, mapOutline, warningOutline } from 'ionicons/icons';
import { chevronBackOutline } from 'ionicons/icons';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-jugador-reservas',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './jugador-reservas.page.html',
  styleUrls: ['./jugador-reservas.page.scss'],
})
export class JugadorReservasPage implements OnInit {

  jugadorNombre = '...';
  fotoPerfil = '';

  // Vista actual
  vistaActual: 'agendar' | 'mis-entrenamientos' = 'mis-entrenamientos';

  // Para agendar
  profesores: any[] = [];
  horarios: any[] = [];
  horariosPorDia: any = {};
  dias: string[] = [];
  diaSeleccionado!: string;
  tramoSeleccionado: 'manana' | 'tarde' | 'noche' = 'manana';
  packs: any[] = [];
  entrenadores: any[] = [];
  selectedEntrenador: number | null = null;
  selectedPack: any = null;
  packsDelEntrenador: any[] = [];
  jugadorId = Number(localStorage.getItem('userId'));

  // Discovery & Filtering
  tipoEntrenamiento: 'todos' | 'individual' | 'multiplayer' | 'grupal' = 'todos';
  regionSeleccionada: string = '';
  comunaSeleccionada: string = '';
  regions = [
    { id: '13', name: 'Metropolitana de Santiago' },
    { id: '15', name: 'Arica y Parinacota' },
    { id: '1', name: 'Tarapacá' },
    { id: '2', name: 'Antofagasta' },
    { id: '3', name: 'Atacama' },
    { id: '4', name: 'Coquimbo' },
    { id: '5', name: 'Valparaíso' },
    { id: '6', name: 'O\'Higgins' },
    { id: '7', name: 'Maule' },
    { id: '16', name: 'Ñuble' },
    { id: '8', name: 'Biobío' },
    { id: '9', name: 'Araucanía' },
    { id: '14', name: 'Los Ríos' },
    { id: '10', name: 'Los Lagos' },
    { id: '11', name: 'Aysén' },
    { id: '12', name: 'Magallanes' }
  ];
  allComunas: any = {
    '13': ['Santiago', 'Las Condes', 'Providencia', 'Ñuñoa', 'Maipú', 'Puente Alto', 'La Florida', 'Vitacura', 'Lo Barnechea', 'Colina', 'Lampa', 'San Bernardo', 'Peñalolén'],
    '15': ['Arica', 'Camarones', 'Putre', 'General Lagos'],
    '1': ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Pica', 'Huara'],
    '2': ['Antofagasta', 'Calama', 'Mejillones', 'Taltal', 'Tocopilla'],
    '3': ['Copiapó', 'Vallenar', 'Caldera', 'Chañaral', 'Huasco'],
    '4': ['La Serena', 'Coquimbo', 'Ovalle', 'Illapel', 'Vicuña', 'Salamanca'],
    '5': ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué', 'Villa Alemana', 'Limache', 'Quillota', 'San Antonio', 'Los Andes', 'San Felipe'],
    '6': ['Rancagua', 'Machalí', 'Rengo', 'San Fernando', 'Pichilemu', 'Santa Cruz'],
    '7': ['Talca', 'Curicó', 'Linares', 'Constitución', 'Cauquenes', 'Parral'],
    '16': ['Chillán', 'Chillán Viejo', 'San Carlos', 'Bulnes', 'Yungay'],
    '8': ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Chiguayante', 'Hualpén', 'Los Ángeles', 'Coronel', 'Lota', 'Tomé', 'Penco'],
    '9': ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón', 'Angol', 'Victoria', 'Lautaro'],
    '14': ['Valdivia', 'La Unión', 'Río Bueno', 'Panguipulli', 'Paillaco', 'Mariquina'],
    '10': ['Puerto Montt', 'Puerto Varas', 'Osorno', 'Castro', 'Ancud', 'Quellón', 'Frutillar'],
    '11': ['Coyhaique', 'Puerto Aysén', 'Chile Chico', 'Cochrane'],
    '12': ['Punta Arenas', 'Puerto Natales', 'Porvenir', 'Cabo de Hornos']
  };
  filteredComunas: string[] = [];
  isLoadingDiscovery: boolean = false;

  // Pack Purchase Modal
  showPackModal: boolean = false;
  availablePacks: any[] = [];
  pendingHorario: any = null;

  // Para mis entrenamientos
  reservasIndividuales: any[] = [];
  entrenamientosGrupales: any[] = [];
  cargando: boolean = false;

  // Picker State
  showCoachPicker: boolean = false;

  // Invitation Logic
  showModalInvitacion = false;
  selectedReserva: any = null;
  emailInvitado: string = '';

  // Multiclub & Contact
  clubesDisponibles: any[] = [];
  selectedClubId: number | null = null;
  entrenadorTelefono: string = '';
  coachSelectedData: any = null;

  constructor(
    private entrenamientoService: EntrenamientoService,
    private mysqlService: MysqlService,
    private packsService: PacksService,
    private packAlumnoService: PackAlumnoService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    addIcons({
      settingsOutline,
      homeOutline,
      calendarOutline,
      chevronBackOutline,
      logOutOutline,
      peopleOutline,
      locationOutline,
      searchOutline,
      closeOutline,
      checkmarkCircleOutline,
      personOutline,
      mailOutline,
      addOutline,
      callOutline,
      mapOutline,
      warningOutline
    });
  }

  ngOnInit() {
    const userIdStr = localStorage.getItem('userId');
    this.jugadorId = userIdStr ? Number(userIdStr) : 0;

    if (this.jugadorId <= 0) {
      this.router.navigate(['/login']);
      return;
    }

    this.route.queryParams.subscribe(params => {
      if (params['view']) {
        this.vistaActual = params['view'];
      }
      this.cargarMisEntrenamientos();
    });

    this.loadUserProfile();
  }

  loadUserProfile(event?: any) {
    this.mysqlService.getPerfil(this.jugadorId).subscribe({
      next: (res: any) => {
        if (res) {
          const userData = res.user || res;
          if (userData.nombre) this.jugadorNombre = userData.nombre;

          // Process Foto
          const p1 = userData.foto_perfil;
          const p2 = userData.foto;
          const p3 = userData.link_foto;
          let fotoRaw = p1 || p2 || p3;

          if (fotoRaw && fotoRaw.length > 5 && !fotoRaw.includes('imagen_defecto')) {
            this.fotoPerfil = fotoRaw.startsWith('http') ? fotoRaw : `https://api.padelmanager.cl/${fotoRaw.startsWith('/') ? fotoRaw.substring(1) : fotoRaw}`;
          } else {
            this.fotoPerfil = 'assets/avatar.png';
          }

          if (res.direccion || userData.direccion) {
            const dir = res.direccion || userData.direccion;
            this.regionSeleccionada = dir.region || '';
            const selectedRegionObj = this.regions.find(r => r.name === this.regionSeleccionada);
            if (selectedRegionObj) {
              this.filteredComunas = this.allComunas[selectedRegionObj.id] || [];
              this.comunaSeleccionada = dir.comuna || '';
            }
          }
        }
        this.cargarEntrenadores();
        if (event) event.target.complete();
      },
      error: () => {
        this.cargarEntrenadores();
        if (event) event.target.complete();
      }
    });
  }

  handleRefresh(event: any) {
    this.cargarMisEntrenamientos();
    this.loadUserProfile(event);
  }

  updateComunas(keepComuna = false): void {
    const selectedRegion = this.regions.find(r => r.name === this.regionSeleccionada);
    if (selectedRegion) {
      this.filteredComunas = this.allComunas[selectedRegion.id] || [];
      if (!keepComuna) this.comunaSeleccionada = '';
    } else {
      this.filteredComunas = [];
    }
    this.cargarEntrenadores();
  }

  onComunaChange(): void {
    this.cargarEntrenadores();
  }



  cargarMisEntrenamientos() {
    this.cargando = true;
    this.mysqlService.getReservasJugador(this.jugadorId).subscribe({
      next: (res: any) => {
        const ahora = new Date();

        // Mostrar todas las reservas que entrega la API (que ya vienen filtradas por fecha relevante)
        this.reservasIndividuales = res.reservas_individuales || [];
        this.entrenamientosGrupales = (res.entrenamientos_grupales || []).map((eg: any) => ({
          ...eg,
          genero: this.detectarGenero(eg.pack_nombre || '', eg.categoria || '')
        }));

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar entrenamientos:', err);
        this.cargando = false;
      }
    });
  }

  cargarEntrenadores() {
    this.isLoadingDiscovery = true;
    this.packsService.getAllPacks(undefined, undefined, 50, this.regionSeleccionada || undefined, this.comunaSeleccionada || undefined).subscribe({
      next: (res: any[]) => {
        const map = new Map();
        res.forEach(p => {
          if (p.entrenador_id && !map.has(p.entrenador_id)) {
            map.set(p.entrenador_id, {
              id: p.entrenador_id,
              nombre: p.entrenador_nombre,
              foto: p.entrenador_foto,
              descripcion: p.entrenador_descripcion,
              comuna: p.trainer_comuna,
              telefono: p.entrenador_telefono
            });
          }
        });
        this.entrenadores = Array.from(map.values());

        // Also fetch user's active packs for later credit checking
        this.entrenamientoService.getEntrenadorPorJugador(this.jugadorId).subscribe({
          next: (resPacks: any[]) => {
            this.packs = resPacks || [];
            this.isLoadingDiscovery = false;
          },
          error: () => this.isLoadingDiscovery = false
        });
      },
      error: (err) => {
        console.error('Error loading discovery:', err);
        this.isLoadingDiscovery = false;
      }
    });
  }

  get filteredDias(): string[] {
    // Club filtering is already handled by the API call and generarBloquesHorarios,
    // so we only need to hide days that ended up with zero slots.
    return this.dias.filter(dia => {
      const tramos = this.horariosPorDia[dia];
      if (!tramos) return false;
      return tramos.manana.length > 0 || tramos.tarde.length > 0 || tramos.noche.length > 0;
    });
  }

  get selectedCoachName(): string {
    const coach = this.entrenadores.find(c => c.id === this.selectedEntrenador);
    return coach ? coach.nombre : 'Selecciona un coach';
  }

  toggleCoachPicker() {
    this.showCoachPicker = !this.showCoachPicker;
  }

  seleccionarProfesor(entrenadorId: number) {
    this.selectedEntrenador = entrenadorId;
    console.log('Entrenador seleccionado:', entrenadorId);
  }

  onEntrenadorChange() {
    this.showCoachPicker = false;
    if (!this.selectedEntrenador) return;

    this.cargando = true;

    // Filter packs for this trainer that have remaining sessions
    this.packsDelEntrenador = this.packs.filter(p => {
      return Number(p.entrenador_id) === Number(this.selectedEntrenador) && Number(p.sesiones_restantes) > 0;
    });

    this.entrenamientoService
      .getDisponibilidadEntrenador(this.selectedEntrenador!, undefined, this.selectedClubId || undefined)
      .subscribe({
        next: res => {
          this.horarios = res;

          // Extraer clubes únicos de la disponibilidad SOLO si no tenemos un club ya seleccionado
          // O siempre extraerlos para mantener el listado completo
          const clubMap = new Map();
          res.forEach((slot: any) => {
            if (slot.club_id && !clubMap.has(slot.club_id)) {
              clubMap.set(slot.club_id, {
                id: slot.club_id,
                nombre: slot.club_nombre,
                direccion: slot.club_direccion,
                maps: slot.club_maps
              });
            }
          });

          // Si no hay club seleccionado, actualizamos la lista de clubes disponibles
          // Si ya hay uno, mantenemos la lista previa para no perder opciones en el select
          if (this.clubesDisponibles.length === 0 || !this.selectedClubId) {
            this.clubesDisponibles = Array.from(clubMap.values());
          }

          // Set trainer contact
          if (res.length > 0) {
            this.entrenadorTelefono = res[0].entrenador_telefono;
          }

          this.generarBloquesHorarios(res);
          this.cargando = false;
        },
        error: err => {
          console.error(err);
          this.cargando = false;
        }
      });
  }

  mostrarPacksDisponibles(horario: any) {
    this.pendingHorario = horario;
    this.cargando = true;

    // Determine filter type based on the slot selected
    let targetType = this.tipoEntrenamiento;
    if (targetType === 'todos') {
      targetType = 'individual'; // default
    }

    this.mysqlService.getAllPacks(this.selectedEntrenador!).subscribe({
      next: (res) => {
        console.log('Packs recibidos:', res);

        // Filter by type
        let filtered = res.filter(p => this.isPackMatch(p, targetType));

        // Fallback: If no packs match the specific type, show everything from this coach
        if (filtered.length === 0) {
          filtered = res;
        }

        this.availablePacks = filtered.sort((a, b) => Number(a.precio) - Number(b.precio));
        this.showPackModal = true;
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
        this.mostrarToast('❌ No se pudieron cargar los packs');
      }
    });
  }

  isPackMatch(pack: any, type: string): boolean {
    const cant = Number(pack.cantidad_personas || 1);
    const pTipo = pack.tipo?.toLowerCase() || 'individual';
    if (type === 'individual') return cant === 1 && pTipo !== 'grupal';
    if (type === 'multiplayer') return cant > 1 && pTipo !== 'grupal';
    if (type === 'grupal') return pTipo === 'grupal';
    return false;
  }

  async comprarPackYReservar(pack: any) {
    const loader = await this.loadingCtrl.create({ message: 'Activando pack...' });
    await loader.present();

    const rawId = pack.id || pack.pack_id || pack.id_pack;
    const packId = Number(rawId);

    const packPayload = {
      pack_id: packId,
      jugador_id: Number(this.jugadorId)
    };

    this.packAlumnoService.insertPackAlumno(packPayload).subscribe({
      next: (packRes: any) => {
        const newPackJugadorId = packRes.pack_jugador_id;

        let finalTipo = 'individual';
        const packTypeStr = (pack.tipo || '').toLowerCase();
        if (packTypeStr.includes('grupal') || packTypeStr.includes('multi')) {
          finalTipo = 'grupal';
        }

        const payload = {
          entrenador_id: Number(this.selectedEntrenador),
          fecha: this.pendingHorario.fecha,
          hora_inicio: this.pendingHorario.hora_inicio.toTimeString().slice(0, 5),
          hora_fin: this.pendingHorario.hora_fin.toTimeString().slice(0, 5),
          jugador_id: Number(this.jugadorId),
          pack_id: packId,
          pack_jugador_id: newPackJugadorId,
          estado: 'reservado',
          tipo: finalTipo,
          cantidad_personas: 1
        };

        this.entrenamientoService.crearReserva(payload).subscribe({
          next: () => {
            loader.dismiss();
            // Notifications
            this.notificationService.notificarPackContratado(this.jugadorId, pack.nombre);
            this.notificationService.notificarReservaCreada(this.jugadorId, pack.nombre, payload.fecha, payload.hora_inicio);
            this.notificationService.programarRecordatorio(this.jugadorId, pack.nombre, payload.fecha, payload.hora_inicio);

            this.alertCtrl.create({
              header: '¡Listo!',
              message: 'Pack activado y clase agendada correctamente.',
              buttons: ['OK']
            }).then(a => a.present());
            this.onEntrenadorChange(); // Reload slots
          },
          error: () => {
            loader.dismiss();
            this.mostrarToast('❌ Error al agendar la clase');
          }
        });
      },
      error: () => {
        loader.dismiss();
        this.mostrarToast('❌ Error al procesar el pack');
      }
    });
  }

  onPackChange() {
    if (!this.selectedPack || !this.selectedEntrenador) return;

    const packId = this.selectedPack.pack_id;
    console.log("Cambio de Pack Mobile - Nuevo ID:", packId);

    this.entrenamientoService
      .getDisponibilidadEntrenador(this.selectedEntrenador!, packId, this.selectedClubId || undefined)
      .subscribe({
        next: res => {
          this.horarios = res;
          this.generarBloquesHorarios(res);
        },
        error: err => console.error('Error loading availability after pack change:', err)
      });
  }

  setFilter(tipo: any): void {
    this.tipoEntrenamiento = tipo;
    // Don't reset diaSeleccionado to improve UX
    this.generarBloquesHorarios(this.horarios);
  }

  getSelectedClub() {
    return this.clubesDisponibles.find(c => Number(c.id) === Number(this.selectedClubId));
  }

  onClubFilterChange() {
    this.onEntrenadorChange();
  }

  generarBloquesHorarios(disponibilidades: any[]) {
    this.horariosPorDia = {};
    this.dias = [];

    // Pre-populate 10 days from today
    for (let i = 0; i < 10; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const ds = d.toISOString().split('T')[0];
      this.dias.push(ds);
      this.horariosPorDia[ds] = { manana: [], tarde: [], noche: [] };
    }

    const bloquesUnicos = new Set<string>();
    const ahora = new Date();

    disponibilidades.forEach(d => {
      const slotTipo = (d.tipo || 'individual').toLowerCase();

      // Filter by club if selected
      if (this.selectedClubId && Number(d.club_id) !== Number(this.selectedClubId)) return;

      if (this.tipoEntrenamiento !== 'todos') {
        if (this.tipoEntrenamiento === 'grupal' && slotTipo !== 'grupal') return;
        if (this.tipoEntrenamiento !== 'grupal' && slotTipo === 'grupal') return;
      }

      let inicio = new Date(d.fecha_inicio || d.hora_inicio);
      const fin = new Date(d.fecha_fin || d.hora_fin);
      const ocupado = Boolean(d.ocupado);

      while (inicio < fin) {
        const bloqueInicio = new Date(inicio);
        const bloqueFin = new Date(inicio.getTime() + 60 * 60 * 1000);

        if (bloqueInicio > ahora && bloqueFin <= fin) {
          const fecha = bloqueInicio.toISOString().split('T')[0];

          // Only add to result if day falls within the 10 days we track
          if (this.horariosPorDia[fecha]) {
            const horaInicio = bloqueInicio.toTimeString().slice(0, 5);
            const horaFin = bloqueFin.toTimeString().slice(0, 5);
            const key = `${fecha} ${horaInicio}-${horaFin}`;

            if (!bloquesUnicos.has(key)) {
              bloquesUnicos.add(key);
              const hora = bloqueInicio.getHours();
              let tramo: 'manana' | 'tarde' | 'noche' = 'noche';
              if (hora >= 6 && hora < 12) tramo = 'manana';
              else if (hora >= 12 && hora < 18) tramo = 'tarde';

              this.horariosPorDia[fecha][tramo].push({
                fecha,
                hora_inicio: bloqueInicio,
                hora_fin: bloqueFin,
                ocupado: ocupado,
                tipo: slotTipo,
                pack_id: d.pack_id,
                nombre_pack: d.nombre_pack,
                categoria: d.categoria,
                genero: this.detectarGenero(d.nombre_pack || '', d.categoria || '')
              });
            }
          }
        }
        inicio.setHours(inicio.getHours() + 1);
      }
    });

    // Auto-select first available day and tramo
    const currentFiltered = this.filteredDias;
    if (currentFiltered.length > 0) {
      if (!this.diaSeleccionado || !currentFiltered.includes(this.diaSeleccionado)) {
        this.diaSeleccionado = currentFiltered[0];
      }
      this.actualizarTramoAutomatico();
    } else {
      this.diaSeleccionado = '';
    }
  }

  actualizarTramoAutomatico() {
    if (!this.diaSeleccionado || !this.horariosPorDia[this.diaSeleccionado]) return;
    const tramos = ['manana', 'tarde', 'noche'] as const;
    for (const t of tramos) {
      if (this.horariosPorDia[this.diaSeleccionado][t].length > 0) {
        this.tramoSeleccionado = t;
        break;
      }
    }
  }


  reservarHorario(horario: any) {
    if (horario.ocupado) return;

    let packActivo: any = null;
    let finalType = this.tipoEntrenamiento;

    // Logic Fix: If 'todos', first try to find any compatible pack
    if (this.tipoEntrenamiento === 'todos') {
      // Prefer individual packs, then multiplayer
      packActivo = this.packs.find(p =>
        Number(p.entrenador_id) === Number(this.selectedEntrenador) &&
        Number(p.sesiones_restantes) > 0 &&
        this.isPackMatch(p, 'individual')
      );
      if (packActivo) {
        finalType = 'individual';
      } else {
        packActivo = this.packs.find(p =>
          Number(p.entrenador_id) === Number(this.selectedEntrenador) &&
          Number(p.sesiones_restantes) > 0 &&
          this.isPackMatch(p, 'multiplayer')
        );
        if (packActivo) finalType = 'multiplayer';
      }
    } else {
      // Use current filter
      packActivo = this.packs.find(p => {
        const basicMatch = Number(p.entrenador_id) === Number(this.selectedEntrenador) &&
          Number(p.sesiones_restantes) > 0 &&
          this.isPackMatch(p, this.tipoEntrenamiento);

        if (horario.tipo === 'grupal' && horario.pack_id) {
          return basicMatch && Number(p.pack_id) === Number(horario.pack_id);
        }
        return basicMatch;
      });
      finalType = this.tipoEntrenamiento;
    }

    if (packActivo) {
      this.alertCtrl.create({
        header: '¿Confirmar Reserva?',
        message: `Clase para el ${horario.fecha} a las ${horario.hora_inicio.toTimeString().slice(0, 5)}. Se descontará 1 crédito de tu pack.`,
        buttons: [
          { text: 'Cancelar', role: 'cancel' },
          {
            text: 'Reservar',
            handler: () => {
              const payload = {
                entrenador_id: this.selectedEntrenador,
                pack_id: packActivo.pack_id,
                pack_jugador_id: packActivo.pack_jugador_id,
                fecha: horario.fecha,
                hora_inicio: horario.hora_inicio.toTimeString().slice(0, 5),
                hora_fin: horario.hora_fin.toTimeString().slice(0, 5),
                jugador_id: this.jugadorId,
                estado: 'reservado',
                tipo: finalType,
                cantidad_personas: 1
              };

              this.entrenamientoService.crearReserva(payload).subscribe({
                next: () => {
                  // Notifications
                  this.notificationService.notificarReservaCreada(this.jugadorId, packActivo.pack_nombre || 'Entrenamiento', payload.fecha, payload.hora_inicio);
                  this.notificationService.programarRecordatorio(this.jugadorId, packActivo.pack_nombre || 'Entrenamiento', payload.fecha, payload.hora_inicio);

                  this.mostrarToast('✅ Reserva guardada correctamente');
                  this.onEntrenadorChange();
                },
                error: () => this.mostrarToast('❌ Error al guardar la reserva')
              });
            }
          }
        ]
      }).then(a => a.present());
    } else {
      // NO PACK: Show available packs to buy
      this.mostrarPacksDisponibles(horario);
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  cambiarVista(vista: 'agendar' | 'mis-entrenamientos') {
    this.vistaActual = vista;
    if (vista === 'mis-entrenamientos') {
      this.cargarMisEntrenamientos();
    }
  }

  getEstadoBadgeColor(estado: string): string {
    if (estado === 'activo' || estado === 'confirmado') return 'success';
    if (estado === 'pendiente') return 'warning';
    if (estado === 'cancelado') return 'danger';
    return 'medium';
  }

  getDiasSemana(dia_semana: number): string {
    // BD usa formato 0-6: 0=Domingo, 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[dia_semana] || `Día ${dia_semana} no válido`;
  }

  goToHome() {
    this.router.navigate(['/jugador-home']);
  }

  mostrarConfirmacionCancelar(reserva: any) {
    // Obtener el ID correctamente (puede ser 'id' o 'reserva_id' dependiendo del origen)
    const reserva_id = reserva.reserva_id || reserva.id;

    if (!reserva_id) {
      console.error('Error: No se encontró ID de reserva en', reserva);
      return;
    }

    const fecha = new Date(reserva.fecha + 'T' + reserva.hora_inicio);
    const ahora = new Date();
    const horas_restantes = (fecha.getTime() - ahora.getTime()) / (1000 * 60 * 60);

    const puedeCancelar = horas_restantes >= 12;

    const titulo = puedeCancelar ? '¿Cancelar reserva?' : 'No se puede cancelar';
    const mensaje = puedeCancelar
      ? `¿Estás seguro que deseas cancelar el entrenamiento del ${fecha.toLocaleDateString('es-ES')} a las ${reserva.hora_inicio.slice(0, 5)}?`
      : `Debes cancelar con mínimo 12 horas de anticipación. Horas restantes: ${Math.round(horas_restantes)}`;

    this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: puedeCancelar
        ? [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Sí, cancelar',
            role: 'destructive',
            handler: () => {
              this.cancelarReserva(reserva_id);
            }
          }
        ]
        : [
          {
            text: 'Entendido',
            role: 'cancel'
          }
        ]
    }).then(alert => alert.present());
  }

  cancelarReserva(reserva_id: number) {
    // Validar datos
    if (!reserva_id || reserva_id <= 0) {
      console.error('Error: reserva_id inválido', reserva_id);
      return;
    }

    if (!this.jugadorId || this.jugadorId <= 0) {
      console.error('Error: jugadorId inválido', this.jugadorId);
      return;
    }

    this.mysqlService.cancelarReservaJugador(reserva_id, this.jugadorId).subscribe({
      next: async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: '✓ Reserva cancelada correctamente',
          duration: 2000,
          color: 'success',
          position: 'top'
        });
        await toast.present();

        // Recargar entrenamientos
        this.cargarMisEntrenamientos();
      },
      error: async (err: any) => {
        const errorMsg = err.error?.error || 'Error al cancelar la reserva';
        const toast = await this.toastCtrl.create({
          message: `✗ ${errorMsg}`,
          duration: 2500,
          color: 'danger',
          position: 'top'
        });
        await toast.present();
      }
    });
  }

  // --- Invitation Methods ---
  abrirModalInvitacion(reserva: any) {
    this.selectedReserva = reserva;
    this.emailInvitado = '';
    this.showModalInvitacion = true;
  }

  cerrarModal() {
    this.showModalInvitacion = false;
    this.selectedReserva = null;
  }

  enviarInvitacion() {
    if (!this.emailInvitado || !this.emailInvitado.includes('@')) {
      this.mostrarToast('Ingresa un email válido');
      return;
    }

    if (!this.selectedReserva || !this.selectedReserva.pack_jugador_id) {
      this.mostrarToast('No se pudo identificar el pack para esta reserva.');
      return;
    }

    this.mostrarToast('Enviando invitación...');

    this.packAlumnoService.invitarJugador(this.selectedReserva.pack_jugador_id, this.emailInvitado).subscribe({
      next: (res: any) => {
        this.mostrarToast(res.message || 'Invitación enviada correctamente.');
        this.cerrarModal();
        this.cargarMisEntrenamientos();
      },
      error: (err: any) => {
        console.error(err);
        this.mostrarToast(err.error?.error || 'No se pudo enviar la invitación.');
      }
    });
  }

  detectarGenero(nombre: string, categoria: string): 'masculino' | 'femenino' | 'mixto' | null {
    const text = `${nombre} ${categoria}`.toLowerCase();
    if (text.includes('varon') || text.includes('masc') || text.includes('caballero') || text.includes('hombre')) return 'masculino';
    if (text.includes('dama') || text.includes('feme') || text.includes('mujer') || text.includes('chica')) return 'femenino';
    if (text.includes('mixto')) return 'mixto';
    return null;
  }

  getGeneroLabel(genero: string | null): string {
    if (genero === 'masculino') return 'VARONES';
    if (genero === 'femenino') return 'DAMAS';
    if (genero === 'mixto') return 'MIXTO';
    return '';
  }

}