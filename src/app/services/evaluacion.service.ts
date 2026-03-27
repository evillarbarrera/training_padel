import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EvaluacionService {
    private apiUrl = `${environment.apiUrl}/evaluaciones`;

    constructor(private http: HttpClient) { }

    private getHeaders() {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json'
        });
    }

    crearEvaluacion(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/create_evaluacion.php`, data, { headers: this.getHeaders() });
    }

    getEvaluaciones(jugadorId: number, entrenadorId?: number): Observable<any[]> {
        let url = `${this.apiUrl}/get_evaluaciones.php?jugador_id=${jugadorId}`;
        if (entrenadorId) url += `&entrenador_id=${entrenadorId}`;
        return this.http.get<any[]>(url, { headers: this.getHeaders() });
    }

    getVideos(jugadorId: number, entrenadorId?: number): Observable<any[]> {
        let url = `${environment.apiUrl}/entrenador/get_videos.php?jugador_id=${jugadorId}`;
        if (entrenadorId) url += `&entrenador_id=${entrenadorId}`;
        return this.http.get<any[]>(url, { headers: this.getHeaders() });
    }

    uploadVideo(formData: FormData): Observable<any> {
        // For file uploads, we SHOULD NOT set 'Content-Type': 'application/json'
        // HttpClient handles the boundary automatically for FormData
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            'Authorization': token ? `Bearer ${token}` : ''
        });
        return this.http.post(`${environment.apiUrl}/entrenador/add_video.php`, formData, { headers });
    }

    deleteVideo(videoId: number): Observable<any> {
        const body = { video_id: videoId };
        return this.http.post(`${environment.apiUrl}/entrenador/delete_video.php`, body, { headers: this.getHeaders() });
    }
}
