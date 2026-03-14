import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.padelacademy.app',
  appName: 'PadelManager',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      // El Server Client ID debe ser de tipo "Web" para la autenticación en el backend
      serverClientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com',
      // El iOS Client ID DEBE ser de tipo "iOS" creado en Google Cloud Console para evitar el Error 400
      iosClientId: '786145270372-1pilhghaglafm9l0vihjhagcugovtvh8.apps.googleusercontent.com',
      // El Android Client ID DEBE ser de tipo "Android" creado en Google Cloud Console
      androidClientId: '786145270372-v1tekj5isnd3gp8l65u6plt5ra115ivf.apps.googleusercontent.com',
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  server: {
    cleartext: true,
    allowNavigation: ['api.padelmanager.cl', 'localhost', '*']
  }
};


export default config;
