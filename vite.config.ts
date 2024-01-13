import { PluginOption, defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: false,
      filename: 'analytics.html'
    }) as PluginOption
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules'))
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          return 'vender';
        }
      }
    }
  }
});
