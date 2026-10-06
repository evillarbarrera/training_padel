import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

export interface WeatherInfo {
  temp: string;
  tempMax?: number;
  tempMin?: number;
  desc: string;
  icon: string;
  locationName: string;
  isOutdoorGood: boolean;
  badgeText: string;
  badgeClass: 'optimal' | 'rain' | 'wind' | 'hot' | 'cold';
  precipProb?: number;
  windSpeed?: number;
  humidity?: number;
  isLive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private forecastCache = new Map<string, { timestamp: number; data: any }>();
  private readonly CACHE_TTL_MS = 60 * 60 * 1000; // 1 hora de caché

  // Coordenadas oficiales de comunas y regiones de Chile
  private readonly LOCATION_COORDS: Record<string, { lat: number; lng: number; name: string }> = {
    'machalí': { lat: -34.1833, lng: -70.6667, name: 'Machalí' },
    'machali': { lat: -34.1833, lng: -70.6667, name: 'Machalí' },
    'rancagua': { lat: -34.1708, lng: -70.7444, name: 'Rancagua' },
    'rengo': { lat: -34.4069, lng: -70.8586, name: 'Rengo' },
    'san fernando': { lat: -34.5839, lng: -70.9889, name: 'San Fernando' },
    'santa cruz': { lat: -34.6392, lng: -71.3653, name: 'Santa Cruz' },
    'pichilemu': { lat: -34.3858, lng: -72.0044, name: 'Pichilemu' },
    'mostazal': { lat: -33.9833, lng: -70.7000, name: 'Mostazal' },
    'graneros': { lat: -34.0667, lng: -70.7167, name: 'Graneros' },
    'san vicente': { lat: -34.4333, lng: -71.0833, name: 'San Vicente de Tagua Tagua' },
    'o\'higgins': { lat: -34.1708, lng: -70.7444, name: 'O\'Higgins' },
    'ohiggins': { lat: -34.1708, lng: -70.7444, name: 'O\'Higgins' },

    // Región Metropolitana
    'santiago': { lat: -33.4489, lng: -70.6693, name: 'Santiago' },
    'las condes': { lat: -33.4117, lng: -70.5672, name: 'Las Condes' },
    'vitacura': { lat: -33.3833, lng: -70.5667, name: 'Vitacura' },
    'lo barnechea': { lat: -33.3500, lng: -70.5167, name: 'Lo Barnechea' },
    'providencia': { lat: -33.4333, lng: -70.6167, name: 'Providencia' },
    'ñuñoa': { lat: -33.4500, lng: -70.6000, name: 'Ñuñoa' },
    'nunoa': { lat: -33.4500, lng: -70.6000, name: 'Ñuñoa' },
    'la reina': { lat: -33.4500, lng: -70.5333, name: 'La Reina' },
    'peñalolén': { lat: -33.4833, lng: -70.5333, name: 'Peñalolén' },
    'penalolen': { lat: -33.4833, lng: -70.5333, name: 'Peñalolén' },
    'la florida': { lat: -33.5167, lng: -70.5833, name: 'La Florida' },
    'puente alto': { lat: -33.5900, lng: -70.5700, name: 'Puente Alto' },
    'maipú': { lat: -33.5100, lng: -70.7600, name: 'Maipú' },
    'maipu': { lat: -33.5100, lng: -70.7600, name: 'Maipú' },
    'san bernardo': { lat: -33.6000, lng: -70.7100, name: 'San Bernardo' },
    'colina': { lat: -33.2000, lng: -70.6800, name: 'Colina / Chicureo' },
    'chicureo': { lat: -33.2800, lng: -70.6500, name: 'Chicureo' },
    'lampa': { lat: -33.2833, lng: -70.8667, name: 'Lampa' },
    'huechuraba': { lat: -33.3833, lng: -70.6333, name: 'Huechuraba' },
    'recoleta': { lat: -33.4000, lng: -70.6333, name: 'Recoleta' },
    'independencia': { lat: -33.4167, lng: -70.6667, name: 'Independencia' },
    'quilicura': { lat: -33.3667, lng: -70.7333, name: 'Quilicura' },
    'pudahuel': { lat: -33.4333, lng: -70.7667, name: 'Pudahuel' },
    'estación central': { lat: -33.4500, lng: -70.7000, name: 'Estación Central' },
    'san miguel': { lat: -33.4833, lng: -70.6500, name: 'San Miguel' },
    'san joaquín': { lat: -33.5000, lng: -70.6333, name: 'San Joaquín' },
    'macul': { lat: -33.4833, lng: -70.6000, name: 'Macul' },
    'buin': { lat: -33.7333, lng: -70.7333, name: 'Buin' },
    'paine': { lat: -33.8167, lng: -70.7500, name: 'Paine' },
    'talagante': { lat: -33.6667, lng: -70.9333, name: 'Talagante' },
    'peñaflor': { lat: -33.6000, lng: -70.8833, name: 'Peñaflor' },
    'melipilla': { lat: -33.6892, lng: -71.2158, name: 'Melipilla' },

    // Valparaíso
    'viña del mar': { lat: -33.0245, lng: -71.5518, name: 'Viña del Mar' },
    'vina del mar': { lat: -33.0245, lng: -71.5518, name: 'Viña del Mar' },
    'valparaíso': { lat: -33.0472, lng: -71.6127, name: 'Valparaíso' },
    'valparaiso': { lat: -33.0472, lng: -71.6127, name: 'Valparaíso' },
    'concón': { lat: -32.9167, lng: -71.5167, name: 'Concón' },
    'concon': { lat: -32.9167, lng: -71.5167, name: 'Concón' },
    'quilpué': { lat: -33.0456, lng: -71.4428, name: 'Quilpué' },
    'villa alemana': { lat: -33.0417, lng: -71.3750, name: 'Villa Alemana' },
    'quillota': { lat: -32.8804, lng: -71.2482, name: 'Quillota' },
    'los andes': { lat: -32.8339, lng: -70.5983, name: 'Los Andes' },
    'san felipe': { lat: -32.7500, lng: -70.7333, name: 'San Felipe' },

    // Norte
    'arica': { lat: -18.4783, lng: -70.3126, name: 'Arica' },
    'iquique': { lat: -20.2133, lng: -70.1503, name: 'Iquique' },
    'antofagasta': { lat: -23.6500, lng: -70.4000, name: 'Antofagasta' },
    'calama': { lat: -22.4667, lng: -68.9333, name: 'Calama' },
    'copiapó': { lat: -27.3668, lng: -70.3323, name: 'Copiapó' },
    'la serena': { lat: -29.9027, lng: -71.2520, name: 'La Serena' },
    'coquimbo': { lat: -29.9533, lng: -71.3436, name: 'Coquimbo' },

    // Sur
    'curicó': { lat: -34.9828, lng: -71.2394, name: 'Curicó' },
    'talca': { lat: -35.4264, lng: -71.6554, name: 'Talca' },
    'linares': { lat: -35.8467, lng: -71.5931, name: 'Linares' },
    'chillán': { lat: -36.6063, lng: -72.1034, name: 'Chillán' },
    'concepción': { lat: -36.8270, lng: -73.0503, name: 'Concepción' },
    'concepcion': { lat: -36.8270, lng: -73.0503, name: 'Concepción' },
    'los ángeles': { lat: -37.4697, lng: -72.3537, name: 'Los Ángeles' },
    'temuco': { lat: -38.7359, lng: -72.5904, name: 'Temuco' },
    'villarrica': { lat: -39.2833, lng: -72.2333, name: 'Villarrica' },
    'pucón': { lat: -39.2833, lng: -71.9667, name: 'Pucón' },
    'valdivia': { lat: -39.8142, lng: -73.2459, name: 'Valdivia' },
    'osorno': { lat: -40.5739, lng: -73.1335, name: 'Osorno' },
    'puerto montt': { lat: -41.4693, lng: -72.9424, name: 'Puerto Montt' },
    'puerto varas': { lat: -41.3194, lng: -72.9856, name: 'Puerto Varas' },
    'castro': { lat: -42.4721, lng: -73.7732, name: 'Castro' },
    'coyhaique': { lat: -45.5752, lng: -72.0662, name: 'Coyhaique' },
    'punta arenas': { lat: -53.1638, lng: -70.9171, name: 'Punta Arenas' }
  };

  constructor(private http: HttpClient) {}

  /**
   * Resuelve coordenadas precisas a partir de los datos del club
   */
  resolveCoordinates(club: any): { lat: number; lng: number; locationName: string } {
    if (club?.latitud && club?.longitud && !isNaN(Number(club.latitud)) && !isNaN(Number(club.longitud))) {
      const name = club.comuna || club.ciudad || club.nombre || 'Club';
      return { lat: Number(club.latitud), lng: Number(club.longitud), locationName: name };
    }

    const comuna = (club?.comuna || '').toLowerCase().trim();
    if (comuna && this.LOCATION_COORDS[comuna]) {
      return this.LOCATION_COORDS[comuna];
    }

    const direccion = (club?.direccion || '').toLowerCase();
    for (const [key, coords] of Object.entries(this.LOCATION_COORDS)) {
      if (direccion.includes(key)) {
        return coords;
      }
    }

    const region = (club?.region || '').toLowerCase().trim();
    if (region && this.LOCATION_COORDS[region]) {
      return this.LOCATION_COORDS[region];
    }

    // Default Santiago, Chile
    return { lat: -33.4489, lng: -70.6693, name: club?.comuna || 'Santiago' };
  }

  /**
   * Obtiene el reporte del clima en tiempo real para un club y fecha determinada
   */
  getWeather(club: any, dateISO?: string): Observable<WeatherInfo> {
    const coords = this.resolveCoordinates(club);
    const targetDate = dateISO || new Date().toISOString().slice(0, 10);
    const cacheKey = `${coords.lat.toFixed(3)}_${coords.lng.toFixed(3)}`;

    const cached = this.forecastCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < this.CACHE_TTL_MS)) {
      return of(this.extractWeatherForDate(cached.data, targetDate, coords.locationName));
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=America%2FSantiago`;

    return this.http.get<any>(url).pipe(
      map(res => {
        this.forecastCache.set(cacheKey, { timestamp: Date.now(), data: res });
        return this.extractWeatherForDate(res, targetDate, coords.locationName);
      }),
      catchError(err => {
        console.warn('Weather API fallback used:', err);
        return of(this.generateFallbackWeather(coords, targetDate));
      }),
      shareReplay(1)
    );
  }

  private extractWeatherForDate(apiData: any, targetDate: string, locationName: string): WeatherInfo {
    const todayISO = new Date().toISOString().slice(0, 10);
    const isToday = targetDate === todayISO;

    const dailyDates = apiData?.daily?.time || [];
    const dateIndex = dailyDates.indexOf(targetDate);

    let temp = '20°C';
    let tempMax = 22;
    let tempMin = 10;
    let wmoCode = 0;
    let precipProb = 0;
    let windSpeed = 10;
    let humidity = 50;

    if (dateIndex !== -1 && apiData.daily) {
      tempMax = Math.round(apiData.daily.temperature_2m_max[dateIndex] ?? 22);
      tempMin = Math.round(apiData.daily.temperature_2m_min[dateIndex] ?? 10);
      wmoCode = apiData.daily.weather_code[dateIndex] ?? 0;
      precipProb = Math.round(apiData.daily.precipitation_probability_max?.[dateIndex] ?? 0);
      windSpeed = Math.round(apiData.daily.wind_speed_10m_max?.[dateIndex] ?? 12);
      
      if (isToday && apiData.current) {
        const currentTemp = Math.round(apiData.current.temperature_2m);
        temp = `${currentTemp}°C`;
        humidity = Math.round(apiData.current.relative_humidity_2m ?? 50);
        if (apiData.current.weather_code !== undefined) {
          wmoCode = apiData.current.weather_code;
        }
      } else {
        temp = `${tempMax}°C`;
      }
    } else if (apiData?.current) {
      temp = `${Math.round(apiData.current.temperature_2m)}°C`;
      wmoCode = apiData.current.weather_code ?? 0;
      windSpeed = Math.round(apiData.current.wind_speed_10m ?? 10);
      humidity = Math.round(apiData.current.relative_humidity_2m ?? 50);
    }

    const { desc, icon } = this.interpretWmoCode(wmoCode);
    const assessment = this.assessPadelConditions(wmoCode, tempMax, precipProb, windSpeed);

    return {
      temp,
      tempMax,
      tempMin,
      desc,
      icon,
      locationName,
      isOutdoorGood: assessment.isOutdoorGood,
      badgeText: assessment.badgeText,
      badgeClass: assessment.badgeClass,
      precipProb,
      windSpeed,
      humidity,
      isLive: true
    };
  }

  private interpretWmoCode(code: number): { desc: string; icon: string } {
    switch (code) {
      case 0:
        return { desc: 'Cielo Despejado', icon: '☀️' };
      case 1:
        return { desc: 'Principalmente Despejado', icon: '🌤️' };
      case 2:
        return { desc: 'Parcialmente Nublado', icon: '⛅' };
      case 3:
        return { desc: 'Nublado', icon: '☁️' };
      case 45:
      case 48:
        return { desc: 'Neblina', icon: '🌫️' };
      case 51:
      case 53:
      case 55:
        return { desc: 'Llovizna Ligera', icon: '🌦️' };
      case 61:
      case 63:
        return { desc: 'Lluvia Moderada', icon: '🌧️' };
      case 65:
        return { desc: 'Lluvia Intensa', icon: '🌧️' };
      case 71:
      case 73:
      case 75:
        return { desc: 'Nieve', icon: '❄️' };
      case 80:
      case 81:
      case 82:
        return { desc: 'Chubascos', icon: '🌧️' };
      case 95:
      case 96:
      case 99:
        return { desc: 'Tormenta Eléctrica', icon: '⛈️' };
      default:
        return { desc: 'Cielo Despejado', icon: '☀️' };
    }
  }

  private assessPadelConditions(wmoCode: number, tempMax: number, precipProb: number, windSpeed: number): {
    isOutdoorGood: boolean;
    badgeText: string;
    badgeClass: 'optimal' | 'rain' | 'wind' | 'hot' | 'cold';
  } {
    // Lluvia o tormenta
    if (precipProb >= 40 || [51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(wmoCode)) {
      const pText = precipProb > 0 ? ` (${precipProb}%)` : '';
      return {
        isOutdoorGood: false,
        badgeText: `⚠️ Riesgo de Lluvia${pText} · Cancha Techada Sugerida`,
        badgeClass: 'rain'
      };
    }

    // Viento fuerte
    if (windSpeed >= 28) {
      return {
        isOutdoorGood: false,
        badgeText: `💨 Viento Fuerte (${windSpeed} km/h) · Recomendado Indoor`,
        badgeClass: 'wind'
      };
    }

    // Calor extremo
    if (tempMax >= 31) {
      return {
        isOutdoorGood: true,
        badgeText: `☀️ Calor Intenso (${tempMax}°C) · Hidratación Recomendada`,
        badgeClass: 'hot'
      };
    }

    // Frío extremo
    if (tempMax <= 6) {
      return {
        isOutdoorGood: true,
        badgeText: `❄️ Clima Frío (${tempMax}°C) · Buen Calentamiento Previo`,
        badgeClass: 'cold'
      };
    }

    return {
      isOutdoorGood: true,
      badgeText: '🎾 Clima Óptimo para Pádel',
      badgeClass: 'optimal'
    };
  }

  /**
   * Genera datos de respaldo hiperrealistas para Chile según mes y latitud
   */
  private generateFallbackWeather(coords: { lat: number; lng: number; name: string }, dateISO: string): WeatherInfo {
    const d = new Date(dateISO + 'T12:00:00');
    const month = d.getMonth() + 1; // 1 to 12
    const day = d.getDate();

    let baseMax = 21;
    let baseMin = 9;

    if (month >= 10 && month <= 12) {
      baseMax = 22 + (coords.lat > -34 ? 2 : 0); // Primavera
    } else if (month >= 1 && month <= 3) {
      baseMax = 28 + (coords.lat > -34 ? 2 : 0); // Verano
    } else if (month >= 5 && month <= 8) {
      baseMax = 14 + (coords.lat > -34 ? 2 : 0); // Invierno
    } else {
      baseMax = 19; // Otoño
    }

    const seed = (day * 7 + month * 13) % 5;
    const tempMax = baseMax + (seed - 2);
    const tempMin = Math.max(5, tempMax - 11);

    return {
      temp: `${tempMax}°C`,
      tempMax,
      tempMin,
      desc: seed === 4 ? 'Parcialmente Nublado' : 'Cielo Despejado',
      icon: seed === 4 ? '⛅' : '☀️',
      locationName: coords.name,
      isOutdoorGood: true,
      badgeText: '🎾 Clima Óptimo para Pádel',
      badgeClass: 'optimal',
      precipProb: 5,
      windSpeed: 12,
      humidity: 48,
      isLive: false
    };
  }
}
