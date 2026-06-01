import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/module-2-assignment-/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})