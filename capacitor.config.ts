import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionicProject',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      autoHideSplash: true
    }
  },
};

export default config;
