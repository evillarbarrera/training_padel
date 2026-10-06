import SwiftUI
import WatchKit

// MARK: - Animated 3D Rotating & Bouncing Padel Ball
struct PadelBallView: View {
    @State private var rotation: Double = 0
    @State private var bounceOffset: CGFloat = 0
    @State private var shadowScale: CGFloat = 1.0

    var body: some View {
        VStack(spacing: 3) {
            ZStack {
                // Resplandor ambiental centrado en la pelota
                Circle()
                    .fill(Color(red: 0.80, green: 1.00, blue: 0.00).opacity(0.35))
                    .frame(width: 44, height: 44)
                    .blur(radius: 8)

                // Pelota de Pádel con degradado 3D (#FACC15 -> #CCFF00 -> #84CC16 -> #4D7C0F)
                Circle()
                    .fill(
                        RadialGradient(
                            gradient: Gradient(colors: [
                                Color(red: 0.98, green: 0.85, blue: 0.20), // #FACC15
                                Color(red: 0.80, green: 1.00, blue: 0.00), // #CCFF00
                                Color(red: 0.52, green: 0.80, blue: 0.09), // #84CC16
                                Color(red: 0.30, green: 0.49, blue: 0.06)  // #4D7C0F
                            ]),
                            center: UnitPoint(x: 0.35, y: 0.35),
                            startRadius: 2,
                            endRadius: 20
                        )
                    )
                    .frame(width: 36, height: 36)
                    .shadow(color: Color(red: 0.80, green: 1.00, blue: 0.00).opacity(0.55), radius: 6, x: 0, y: 0)

                // Costuras blancas curvadas características de pádel
                ZStack {
                    PadelSeamShape(startAngle: .degrees(205), endAngle: .degrees(335))
                        .stroke(Color.white.opacity(0.95), style: StrokeStyle(lineWidth: 2.2, lineCap: .round))
                        .frame(width: 28, height: 28)

                    PadelSeamShape(startAngle: .degrees(25), endAngle: .degrees(155))
                        .stroke(Color.white.opacity(0.95), style: StrokeStyle(lineWidth: 2.2, lineCap: .round))
                        .frame(width: 28, height: 28)
                }
                .rotationEffect(.degrees(rotation))
            }
            .offset(y: bounceOffset)

            // Sombra dinámica bajo la pelota
            Ellipse()
                .fill(Color.black.opacity(0.55))
                .frame(width: 22, height: 5)
                .scaleEffect(shadowScale)
                .blur(radius: 2)
        }
        .onAppear {
            withAnimation(.linear(duration: 2.2).repeatForever(autoreverses: false)) {
                rotation = 360
            }
            withAnimation(.easeInOut(duration: 1.1).repeatForever(autoreverses: true)) {
                bounceOffset = -5
                shadowScale = 0.65
            }
        }
    }
}

// Forma geométrica para las costuras de la pelota
struct PadelSeamShape: Shape {
    var startAngle: Angle
    var endAngle: Angle

    func path(in rect: CGRect) -> Path {
        var path = Path()
        let center = CGPoint(x: rect.midX, y: rect.midY)
        let radius = rect.width / 2
        path.addArc(center: center, radius: radius, startAngle: startAngle, endAngle: endAngle, clockwise: false)
        return path
    }
}

// MARK: - Splash View Principal (Experiencia idéntica a Mobile)
struct SplashView: View {
    @State private var progress: CGFloat = 0.0
    @State private var isGlowPulsing: Bool = false
    @State private var contentOpacity: Double = 0.0

    var onFinish: () -> Void

    var body: some View {
        ZStack {
            // Fondo oscuro idéntico a la app mobile (#080c14)
            Color(red: 0.031, green: 0.047, blue: 0.078)
                .ignoresSafeArea()

            // Resplandor ambiental de fondo
            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            Color(red: 0.80, green: 1.00, blue: 0.00).opacity(0.22),
                            Color(red: 0.06, green: 0.73, blue: 0.51).opacity(0.10),
                            Color.clear
                        ],
                        center: .center,
                        startRadius: 5,
                        endRadius: 75
                    )
                )
                .frame(width: 130, height: 130)
                .blur(radius: 25)
                .scaleEffect(isGlowPulsing ? 1.18 : 0.88)

            VStack(spacing: 6) {
                // 1. Pelota 3D Animada
                PadelBallView()
                    .padding(.top, 2)

                // 2. Marca PadelBlox + Slogan
                VStack(spacing: 1) {
                    Text("PadelBlox")
                        .font(.system(size: 16, weight: .black, design: .rounded))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color.white, Color(red: 0.89, green: 0.91, blue: 0.94)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )

                    Text("Gestión y evolución")
                        .font(.system(size: 8.5, weight: .bold, design: .rounded))
                        .foregroundColor(Color(red: 0.80, green: 1.00, blue: 0.00)) // #CCFF00
                        .shadow(color: Color(red: 0.80, green: 1.00, blue: 0.00).opacity(0.45), radius: 4, x: 0, y: 0)
                }

                // 3. Barra de Progreso y Estado de Carga
                VStack(spacing: 3) {
                    ZStack(alignment: .leading) {
                        Capsule()
                            .fill(Color.white.opacity(0.12))
                            .frame(width: 82, height: 3)

                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(red: 0.80, green: 1.00, blue: 0.00),
                                        Color(red: 0.06, green: 0.73, blue: 0.51)
                                    ],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .frame(width: 82 * progress, height: 3)
                            .shadow(color: Color(red: 0.80, green: 1.00, blue: 0.00).opacity(0.6), radius: 3)
                    }

                    Text("Cargando experiencia...")
                        .font(.system(size: 8, weight: .semibold, design: .rounded))
                        .foregroundColor(.white.opacity(0.65))
                }
                .padding(.top, 4)
            }
            .opacity(contentOpacity)
        }
        .onAppear {
            WKInterfaceDevice.current().play(.click)

            withAnimation(.easeIn(duration: 0.3)) {
                contentOpacity = 1.0
            }

            withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: true)) {
                isGlowPulsing = true
            }

            withAnimation(.easeInOut(duration: 1.6)) {
                progress = 1.0
            }

            // Transición suave al Home tras 1.8 segundos
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.8) {
                withAnimation(.easeInOut(duration: 0.35)) {
                    onFinish()
                }
            }
        }
    }
}
