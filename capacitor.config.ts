import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.padelacademy.app',
  appName: 'PadelManager',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com',
      iosClientId: '786145270372-liov6hu5v7lcmf2028s9ihi600rp3353.apps.googleusercontent.com',
    },
  },
  server: {
    cleartext: true,
    allowNavigation: ['api.padelmanager.cl', 'localhost', '*']
  }
};

export default config;
