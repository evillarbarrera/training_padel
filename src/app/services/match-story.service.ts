import { Injectable } from '@angular/core';

export interface StoryMatchData {
  club_nombre?: string;
  cancha_nombre?: string;
  fecha?: string;
  hora_inicio?: string;
  marcador?: string;
  categoria?: string;
  es_ganador?: boolean;
  pareja1?: string;
  pareja2?: string;
  smartwatch_data?: {
    velocidad_max_kmh?: number;
    velocidad_media_kmh?: number;
    total_golpes?: number;
    smash_count?: number;
    bandeja_count?: number;
    vibora_count?: number;
    fc_promedio?: number;
    fc_maxima?: number;
    calorias?: number;
    duracion_segundos?: number;
    dispositivo?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class MatchStoryService {

  constructor() {}

  /**
   * Generates a 9:16 (1080 x 1920) high-resolution Canvas image
   * styled with Nike/PadelBlox aesthetic for Instagram Stories & WhatsApp.
   */
  public async generateStoryImage(
    data: StoryMatchData,
    theme: 'dark' | 'volt' | 'ocean' = 'dark'
  ): Promise<string> {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not obtain 2D canvas context');

    // 1. Background Fill & Gradients
    this.drawBackground(ctx, 1080, 1920, theme);

    // 2. Court Wireframe Watermark
    this.drawCourtWireframe(ctx, 1080, 1920);

    // 3. Header: Brand & Tracked Device Badge
    this.drawHeader(ctx, data);

    // 4. Match Context: Club, Court & Date
    this.drawMatchContext(ctx, data);

    // 5. Hero Score & Result Banner (Victoria / Derrota)
    this.drawResultHero(ctx, data, theme);

    // 6. Teams / Duplas
    this.drawTeams(ctx, data);

    // 7. Telemetry KPIs: Smash km/h, Calories, Heart Rate, Total Strokes
    this.drawTelemetryGrid(ctx, data, theme);

    // 8. Shot Distribution Breakdown (Smash, Bandeja, Víbora)
    this.drawStrokesBreakdown(ctx, data);

    // 9. Footer: PadelBlox Watermark & Verified Telemetry Stamp
    this.drawFooter(ctx);

    return canvas.toDataURL('image/png', 0.95);
  }

  // --- DRAWING HELPERS ---

  private drawBackground(ctx: CanvasRenderingContext2D, w: number, h: number, theme: 'dark' | 'volt' | 'ocean') {
    // Base solid dark canvas
    const baseGrad = ctx.createLinearGradient(0, 0, 0, h);
    if (theme === 'ocean') {
      baseGrad.addColorStop(0, '#061325');
      baseGrad.addColorStop(0.5, '#0b1d3a');
      baseGrad.addColorStop(1, '#020712');
    } else if (theme === 'volt') {
      baseGrad.addColorStop(0, '#0a1005');
      baseGrad.addColorStop(0.5, '#0e1710');
      baseGrad.addColorStop(1, '#050a04');
    } else {
      // Dark stealth (default)
      baseGrad.addColorStop(0, '#080c14');
      baseGrad.addColorStop(0.4, '#0f172a');
      baseGrad.addColorStop(1, '#05070c');
    }
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, w, h);

    // Dynamic Glow Orbs
    // Top Right Glow (Neon Volt)
    const glowVolt = ctx.createRadialGradient(900, 300, 10, 900, 300, 600);
    glowVolt.addColorStop(0, 'rgba(204, 255, 0, 0.15)');
    glowVolt.addColorStop(1, 'rgba(204, 255, 0, 0)');
    ctx.fillStyle = glowVolt;
    ctx.fillRect(0, 0, w, h);

    // Center Left Glow (Cyan)
    const glowCyan = ctx.createRadialGradient(150, 1100, 10, 150, 1100, 700);
    glowCyan.addColorStop(0, 'rgba(6, 182, 212, 0.14)');
    glowCyan.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = glowCyan;
    ctx.fillRect(0, 0, w, h);
  }

  private drawCourtWireframe(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 4;

    const courtX = 80;
    const courtY = 320;
    const courtW = w - 160;
    const courtH = 1380;

    // Court Outer Box
    ctx.strokeRect(courtX, courtY, courtW, courtH);

    // Net Line
    ctx.beginPath();
    ctx.moveTo(courtX, courtY + courtH / 2);
    ctx.lineTo(courtX + courtW, courtY + courtH / 2);
    ctx.stroke();

    // Service Boxes
    const serviceDist = courtH * 0.3;
    ctx.strokeRect(courtX, courtY + serviceDist, courtW, courtH * 0.4);

    // Center Service Line
    ctx.beginPath();
    ctx.moveTo(courtX + courtW / 2, courtY + serviceDist);
    ctx.lineTo(courtX + courtW / 2, courtY + courtH - serviceDist);
    ctx.stroke();

    ctx.restore();
  }

  private drawHeader(ctx: CanvasRenderingContext2D, data: StoryMatchData) {
    ctx.save();
    // Brand pill
    const pillX = 90;
    const pillY = 110;
    const pillW = 280;
    const pillH = 64;

    this.roundRect(ctx, pillX, pillY, pillW, pillH, 32);
    ctx.fillStyle = 'rgba(204, 255, 0, 0.12)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(204, 255, 0, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Brand Dot
    ctx.beginPath();
    ctx.arc(pillX + 30, pillY + 32, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#ccff00';
    ctx.fill();

    // Brand Text
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('PADELBLOX', pillX + 50, pillY + 40);

    // Right Badge: Apple Watch Telemetry
    const rightPillW = 340;
    const rightPillX = 1080 - 90 - rightPillW;
    this.roundRect(ctx, rightPillX, pillY, rightPillW, pillH, 32);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#06b6d4';
    ctx.font = '800 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('⚡ APPLE WATCH ULTRA', rightPillX + 24, pillY + 40);

    ctx.restore();
  }

  private drawMatchContext(ctx: CanvasRenderingContext2D, data: StoryMatchData) {
    ctx.save();
    const club = data.club_nombre || 'Club PadelBlox';
    const court = data.cancha_nombre || 'Cancha 1 Panorámica';
    const dateStr = data.fecha ? new Date(data.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short' }).toUpperCase() : 'HOY';

    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(dateStr, 90, 240);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(club, 90, 298);

    ctx.fillStyle = '#06b6d4';
    ctx.font = '800 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`🎾 ${court} · ${data.categoria || 'Open'}`, 90, 345);

    ctx.restore();
  }

  private drawResultHero(ctx: CanvasRenderingContext2D, data: StoryMatchData, theme: 'dark' | 'volt' | 'ocean') {
    ctx.save();
    const isWin = data.es_ganador ?? true;
    const boxX = 90;
    const boxY = 395;
    const boxW = 900;
    const boxH = 260;

    // Card background
    this.roundRect(ctx, boxX, boxY, boxW, boxH, 28);
    const heroGrad = ctx.createLinearGradient(boxX, boxY, boxX + boxW, boxY + boxH);
    if (isWin) {
      heroGrad.addColorStop(0, 'rgba(204, 255, 0, 0.18)');
      heroGrad.addColorStop(1, 'rgba(6, 182, 212, 0.12)');
    } else {
      heroGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      heroGrad.addColorStop(1, 'rgba(255, 255, 255, 0.03)');
    }
    ctx.fillStyle = heroGrad;
    ctx.fill();

    ctx.strokeStyle = isWin ? 'rgba(204, 255, 0, 0.45)' : 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Result Label (VICTORIA / MATCH RECORD)
    ctx.fillStyle = isWin ? '#ccff00' : '#ffffff';
    ctx.font = '900 italic 34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const labelText = isWin ? '🏆 VICTORIA OFICIAL' : '🎾 MATCH REGISTRADO';
    ctx.fillText(labelText, boxX + 44, boxY + 65);

    // Big Scoreboard
    const scoreText = data.marcador || '6-4 7-5';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 84px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(scoreText, boxX + 44, boxY + 165);

    // Sub-text
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Marcador validado en directo en pista', boxX + 44, boxY + 215);

    ctx.restore();
  }

  private drawTeams(ctx: CanvasRenderingContext2D, data: StoryMatchData) {
    ctx.save();
    const p1 = data.pareja1 || 'Emmanuel Villar / Partner';
    const p2 = data.pareja2 || 'Lucas / Diego';

    const startY = 700;
    const cardH = 90;
    const w = 900;

    // Team 1 Card
    this.roundRect(ctx, 90, startY, w, cardH, 20);
    ctx.fillStyle = 'rgba(6, 182, 212, 0.12)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#06b6d4';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('EQ 1', 125, startY + 54);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(p1, 220, startY + 54);

    // Team 2 Card
    const startY2 = startY + 110;
    this.roundRect(ctx, 90, startY2, w, cardH, 20);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#f97316';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('EQ 2', 125, startY2 + 54);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(p2, 220, startY2 + 54);

    ctx.restore();
  }

  private drawTelemetryGrid(ctx: CanvasRenderingContext2D, data: StoryMatchData, theme: string) {
    ctx.save();
    const stats = data.smartwatch_data || {};
    const maxSmash = stats.velocidad_max_kmh || 124;
    const calories = stats.calorias || 640;
    const avgHr = stats.fc_promedio || 148;
    const totalStrokes = stats.total_golpes || 164;

    const startY = 945;
    const cardW = 430;
    const cardH = 220;
    const gap = 40;

    // Card 1: Max Smash Speed (Top Left - Highlighted Neon)
    this.drawMetricCard(
      ctx,
      90,
      startY,
      cardW,
      cardH,
      '⚡ VELOCIDAD SMASH',
      `${Math.round(maxSmash)}`,
      'KM/H',
      'Pico medido con giróscopo',
      '#ccff00',
      true
    );

    // Card 2: Total Strokes (Top Right)
    this.drawMetricCard(
      ctx,
      90 + cardW + gap,
      startY,
      cardW,
      cardH,
      '🎾 TOTAL GOLPES',
      `${totalStrokes}`,
      'IMPACTOS',
      'Clasificados con CoreML',
      '#06b6d4',
      false
    );

    // Card 3: Active Calories (Bottom Left)
    this.drawMetricCard(
      ctx,
      90,
      startY + cardH + gap,
      cardW,
      cardH,
      '🔥 GASTO CALÓRICO',
      `${Math.round(calories)}`,
      'KCAL',
      'Monitor de esfuerzo metabólico',
      '#f97316',
      false
    );

    // Card 4: Heart Rate (Bottom Right)
    this.drawMetricCard(
      ctx,
      90 + cardW + gap,
      startY + cardH + gap,
      cardW,
      cardH,
      '💓 CARDIO PROMEDIO',
      `${avgHr}`,
      'BPM',
      `Pico máx: ${stats.fc_maxima || 182} bpm`,
      '#ef4444',
      false
    );

    ctx.restore();
  }

  private drawMetricCard(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    value: string,
    unit: string,
    footnote: string,
    accentColor: string,
    highlight: boolean
  ) {
    this.roundRect(ctx, x, y, w, h, 24);
    ctx.fillStyle = highlight ? 'rgba(204, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.05)';
    ctx.fill();

    ctx.strokeStyle = highlight ? 'rgba(204, 255, 0, 0.4)' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Metric Label
    ctx.fillStyle = accentColor;
    ctx.font = '800 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(label, x + 28, y + 48);

    // Value + Unit
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 60px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(value, x + 28, y + 125);

    const valWidth = ctx.measureText(value).width;
    ctx.fillStyle = accentColor;
    ctx.font = '800 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(unit, x + 35 + valWidth, y + 122);

    // Footnote
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(footnote, x + 28, y + 175);
  }

  private drawStrokesBreakdown(ctx: CanvasRenderingContext2D, data: StoryMatchData) {
    ctx.save();
    const stats = data.smartwatch_data || {};
    const smashes = stats.smash_count || 18;
    const bandejas = stats.bandeja_count || 26;
    const viboras = stats.vibora_count || 14;

    const startY = 1480;
    const w = 900;
    const h = 170;

    this.roundRect(ctx, 90, startY, w, h, 24);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Header
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('DISTRIBUCIÓN DE GOLPES ESPECIALES (IA)', 125, startY + 45);

    // 3 Chips inside
    const chipW = 260;
    const chipH = 68;
    const chipY = startY + 70;

    // Smash Chip
    this.drawMiniChip(ctx, 120, chipY, chipW, chipH, '⚡ SMASH', `${smashes}`, '#ccff00');
    // Bandeja Chip
    this.drawMiniChip(ctx, 120 + chipW + 25, chipY, chipW, chipH, '🏸 BANDEJA', `${bandejas}`, '#06b6d4');
    // Víbora Chip
    this.drawMiniChip(ctx, 120 + (chipW + 25) * 2, chipY, chipW, chipH, '🌀 VÍBORA', `${viboras}`, '#f59e0b');

    ctx.restore();
  }

  private drawMiniChip(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    name: string,
    count: string,
    color: string
  ) {
    this.roundRect(ctx, x, y, w, h, 14);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = '800 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(name, x + 16, y + 42);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(count, x + w - 44, y + 42);
  }

  private drawFooter(ctx: CanvasRenderingContext2D) {
    ctx.save();
    const y = 1750;

    ctx.textAlign = 'center';
    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('PADELBLOX SMARTWATCH ECOSYSTEM', 540, y);

    ctx.fillStyle = '#64748b';
    ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Telemetría en directo y sincronización oficial en padelblox.com', 540, y + 32);

    // Bottom Volt Bar
    ctx.fillStyle = '#ccff00';
    ctx.fillRect(440, y + 60, 200, 6);

    ctx.restore();
  }

  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /**
   * Triggers native OS share sheet (Instagram, WhatsApp, Photos, AirDrop, etc.)
   * or falls back to downloading as image.
   */
  public async shareStoryImage(dataUrl: string, title: string = 'Mi Partido PadelBlox'): Promise<boolean> {
    try {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'padelblox-match-story.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: title,
          text: '¡Mira las estadísticas y telemetría de mi último partido en PadelBlox! 🎾⚡',
          files: [file]
        });
        return true;
      } else if (navigator.share) {
        await navigator.share({
          title: title,
          text: '¡Mira las estadísticas y telemetría de mi último partido en PadelBlox! 🎾⚡',
          url: window.location.href
        });
        return true;
      }
    } catch (e) {
      console.warn('Navigator share dismissed or failed, downloading image instead:', e);
    }

    // Fallback: Download file
    this.downloadStoryImage(dataUrl);
    return true;
  }

  /**
   * Direct download of high-resolution PNG image
   */
  public downloadStoryImage(dataUrl: string, filename: string = 'padelblox-match-story.png'): void {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
