import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { from, Observable } from 'rxjs';

declare const google: any;   // el objeto global cargado por el script GIS

export interface GoogleWebUser {
    idToken: string;          // JWT del usuario
    email: string;
    givenName?: string;
    familyName?: string;
    picture?: string;
}

/**
 * Servicio que solo se ejecuta en la plataforma web.
 * Usa la API de Google Identity Services (GIS) para obtener un ID token.
 */
@Injectable({ providedIn: 'root' })
export class GoogleWebAuthService {
    private clientId = '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com';

    constructor(private platform: Platform) { }

    /**
     * Inicializa la librería GIS y muestra el prompt de inicio de sesión.
     * Devuelve un Observable que emite el usuario cuando el flujo termina.
     */
    signIn(): Observable<GoogleWebUser> {
        if (!this.platform.is('desktop') && !this.platform.is('mobileweb')) {
            // Si no es web, el plugin de Capacitor debe usarse.
            throw new Error('GoogleWebAuthService solo disponible en la web');
        }

        return new Observable<GoogleWebUser>((observer) => {
            // Configuración del cliente GIS
            google.accounts.id.initialize({
                client_id: this.clientId,
                ux_mode: 'popup',
                itp_support: true,
                use_fedcm_for_prompt: false, // Desactiva FedCM para evitar conflictos de red
                callback: (response: any) => {
                    // El response contiene el JWT (credential) y el profile (si se solicita)
                    const idToken = response.credential;
                    // Decodificamos el JWT (solo para extraer el email, nombre, etc.)
                    const payload = JSON.parse(atob(idToken.split('.')[1]));
                    const user: GoogleWebUser = {
                        idToken,
                        email: payload.email,
                        givenName: payload.given_name,
                        familyName: payload.family_name,
                        picture: payload.picture,
                    };
                    observer.next(user);
                    observer.complete();
                },
                // Opcional: habilitar el modo “prompt” automático
                auto_select: false,
                // Si queremos que el prompt aparezca inmediatamente
                // (también podemos llamarlo manualmente con google.accounts.id.prompt())
            });

            // Renderizamos el botón “Sign‑in with Google” (opcional)
            // Si ya tienes un botón propio, puedes omitir esta parte.
            const button = document.getElementById('google-signin-button');
            if (button) {
                google.accounts.id.renderButton(button, {
                    theme: 'outline',
                    size: 'large',
                    text: 'signin_with',
                });
            }

            // Mostramos el prompt (solo si no usamos renderButton)
            google.accounts.id.prompt(); // muestra el cuadro de diálogo si es necesario

            // En caso de error del SDK
            const errorHandler = (err: any) => {
                observer.error(err);
            };
            // El SDK GIS no expone un callback de error directo; cualquier excepción
            // será capturada por el Observable.
        });
    }
}