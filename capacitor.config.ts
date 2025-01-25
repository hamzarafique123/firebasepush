import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technyks.testFCMApp',
  appName: 'firebase',
  webDir: 'www',
  server:{
androidScheme:'https'
  },

  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};


export default config;
