import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EvaluacionService {
    private apiUrl = 'https://api.padelmanager.cl/evaluaciones';

    private token = btoa('1|padel_academy');

    constructor(private http: HttpClient) { }

    private getHeaders() {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        });
    }

    crearEvaluacion(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/create_evaluacion.php`, data, { headers: this.getHeaders() });
    }

    getEvaluaciones(jugadorId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/get_evaluaciones.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
    }

    getVideos(jugadorId: number): Observable<any[]> {
        return this.http.get<any[]>(`https://api.padelmanager.cl/entrenador/get_videos.php?jugador_id=${jugadorId}`, { headers: this.getHeaders() });
    }

    uploadVideo(formData: FormData): Observable<any> {
        // For file uploads, we SHOULD NOT set 'Content-Type': 'application/json'
        // HttpClient handles the boundary automatically for FormData
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.post(`https://api.padelmanager.cl/entrenador/add_video.php`, formData, { headers });
    }

    deleteVideo(videoId: number): Observable<any> {
        const body = { video_id: videoId };
        return this.http.post(`https://api.padelmanager.cl/entrenador/delete_video.php`, body, { headers: this.getHeaders() });
    }
}
