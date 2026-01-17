import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSpinner,
  IonSelect,
  IonSelectOption,
  NavController,
  ToastController
} from '@ionic/angular/standalone';
import { MysqlService } from '../../services/mysql.service';
import { addIcons } from 'ionicons';
import {
  personOutline,
  cameraOutline,
  shareSocialOutline,
  locationOutline,
  chevronBackOutline,
  mailOutline,
  callOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton,
    IonSpinner,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule
  ]
})
export class PerfilPage implements OnInit {

  profile: any = {
    nombre: '',
    usuario: '',
    rol: '',
    telefono: '',
    instagram: '',
    facebook: '',
    foto_perfil: ''
  };

  direccion: any = {
    region: '',
    comuna: '',
    calle: '',
    numero_casa: '',
    referencia: ''
  };

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

  loading = false;
  userId = Number(localStorage.getItem('userId'));

  constructor(
    private mysqlService: MysqlService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    addIcons({
      personOutline,
      cameraOutline,
      shareSocialOutline,
      locationOutline,
      chevronBackOutline,
      mailOutline,
      callOutline
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    if (!this.userId) return;

    this.mysqlService.getPerfil(this.userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.profile = { ...this.profile, ...res.user };
          if (res.direccion) {
            this.direccion = { ...res.direccion };
            this.updateComunas(true); // Cargar comunas iniciales
          }
        }
      },
      error: (err) => console.error('Error loading profile:', err)
    });
  }

  updateComunas(keepComuna = false) {
    const selectedRegion = this.regions.find(r => r.name === this.direccion.region);
    if (selectedRegion) {
      this.filteredComunas = this.allComunas[selectedRegion.id] || [];
      if (!keepComuna) {
        this.direccion.comuna = '';
      }
    } else {
      this.filteredComunas = [];
    }
  }

  async saveProfile() {
    this.loading = true;
    const payload = {
      user_id: this.userId,
      nombre: this.profile.nombre,
      telefono: this.profile.telefono,
      instagram: this.profile.instagram,
      facebook: this.profile.facebook,
      ...this.direccion
    };

    this.mysqlService.updatePerfil(payload).subscribe({
      next: async (res) => {
        this.loading = false;
        if (res.success) {
          const toast = await this.toastCtrl.create({
            message: '✅ Perfil actualizado correctamente',
            duration: 2000,
            color: 'dark'
          });
          toast.present();
        }
      },
      error: async (err) => {
        this.loading = false;
        console.error('Error updating profile:', err);
        const toast = await this.toastCtrl.create({
          message: '❌ Error al actualizar el perfil',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadPhoto(file);
    }
  }

  uploadPhoto(file: File) {
    this.loading = true;
    this.mysqlService.subirFoto(this.userId, file).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success) {
          this.profile.foto_perfil = res.foto_url;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error uploading photo:', err);
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }

}
