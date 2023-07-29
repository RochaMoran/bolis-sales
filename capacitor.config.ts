import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bolis-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Network: {
      appId: "io.ionic.starter"
    },
  }
};

export default config;
