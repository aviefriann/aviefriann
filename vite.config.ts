import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aviefriann/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});