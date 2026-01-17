import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.padelacademy.app',
  appName: 'Padel Academy',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: 'WEB_CLIENT_ID_GOES_HERE.apps.googleusercontent.com',
      iosClientId: 'IOS_CLIENT_ID_GOES_HERE.apps.googleusercontent.com',
    },
  },
};

export default config;
