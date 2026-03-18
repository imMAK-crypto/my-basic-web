import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group vendor libraries
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('framer-motion') || id.includes('gsap')) return 'vendor-animation';
            return 'vendor';
          }
        },
      },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    open: true,
  },
});
