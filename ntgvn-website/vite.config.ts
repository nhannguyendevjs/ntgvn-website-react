import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';
import { VitePWA } from 'vite-plugin-pwa';
import { manifestForPlugIn } from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$ /, /\.(gz)$/],
      deleteOriginalAssets: true,
    }),
    // // compression({
    // //   algorithm: 'brotliCompress',
    // //   exclude: [/\.(br)$ /, /\.(gz)$/],
    // //   // deleteOriginalAssets: true,
    // // }),
    VitePWA(manifestForPlugIn),
  ],
  server: {
    port: 4200,
  },
  build: {},
});
