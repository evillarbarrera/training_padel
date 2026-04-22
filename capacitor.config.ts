import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.padelacademy.app',
  appName: 'PadelManager',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      // El Server Client ID debe ser de tipo "Web" para la autenticación en el backend
      serverClientId: '786145270372-e637i46g6uu1kekcr1ioqdka901acud7.apps.googleusercontent.com',
      // El iOS Client ID DEBE ser de tipo "iOS"
      iosClientId: '786145270372-1pilhghaglafm9l0vihjhagcugovtvh8.apps.googleusercontent.com',
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true
    }
  },
  server: {
    cleartext: true,
    allowNavigation: ['api.padelmanager.cl', 'localhost', '*']
  }
};


export default config;
