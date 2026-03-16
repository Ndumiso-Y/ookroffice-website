import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Coffee--With--DR--KR/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
