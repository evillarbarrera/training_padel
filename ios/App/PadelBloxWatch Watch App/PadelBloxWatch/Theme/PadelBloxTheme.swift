import SwiftUI

// MARK: - PadelBlox Mobile Design System Tokens for watchOS
struct PadelBloxTheme {
    // MARK: - Canvas & Backgrounds (from mobile app #080c14 & #1e293b)
    static let bgDark = Color(red: 0.031, green: 0.047, blue: 0.078)        // #080c14 (Deep Night Canvas)
    static let bgCard = Color(red: 0.118, green: 0.161, blue: 0.231)        // #1e293b (Slate 800 Card)
    static let bgCardSecondary = Color.white.opacity(0.08)
    static let borderSubtle = Color.white.opacity(0.08)

    // MARK: - Brand & Accent Colors (Volt Neon, Cyber Cyan, Sunset Orange)
    static let neonVolt = Color(red: 0.800, green: 1.000, blue: 0.000)      // #ccff00 (Nike/PadelBlox Neon)
    static let cyberCyan = Color(red: 0.024, green: 0.714, blue: 0.831)     // #06b6d4 (Team 1 Accent)
    static let sunsetOrange = Color(red: 0.976, green: 0.451, blue: 0.086)  // #f97316 (Team 2 Accent)
    static let emeraldGreen = Color(red: 0.063, green: 0.725, blue: 0.506)  // #10b981 (Success / Sync)
    static let roseRed = Color(red: 0.937, green: 0.267, blue: 0.267)       // #ef4444 (Heart Rate & Calories)
    static let goldenAmber = Color(red: 0.961, green: 0.620, blue: 0.043)   // #f59e0b (Golden Point & Records)

    // MARK: - Typography & Neutrals
    static let textPrimary = Color.white
    static let textSecondary = Color(red: 0.580, green: 0.639, blue: 0.722) // #94a3b8 (Slate 400)
    static let textMuted = Color(red: 0.392, green: 0.455, blue: 0.545)     // #64748b (Slate 500)

    // MARK: - Brand Gradients
    static let neonGradient = LinearGradient(
        colors: [neonVolt, emeraldGreen],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    static let cyanGradient = LinearGradient(
        colors: [cyberCyan, Color(red: 0.03, green: 0.55, blue: 0.70)],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    static let team1CardFill = LinearGradient(
        colors: [cyberCyan.opacity(0.18), bgCard],
        startPoint: .top,
        endPoint: .bottom
    )

    static let team2CardFill = LinearGradient(
        colors: [sunsetOrange.opacity(0.18), bgCard],
        startPoint: .top,
        endPoint: .bottom
    )
}
