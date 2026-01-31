import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.padelacademy.app',
  appName: 'PadelManager',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: 'WEB_CLIENT_ID_GOES_HERE.apps.googleusercontent.com',
      iosClientId: 'IOS_CLIENT_ID_GOES_HERE.apps.googleusercontent.com',
    },
  },
  server: {
    cleartext: true,
    allowNavigation: ['api.padelmanager.cl', 'localhost', '*']
  }
};

export default config;
