import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Vercel serves from the root; GitHub Pages serves from /portfolio/
  base: process.env.VERCEL ? '/' : '/portfolio/',
  plugins: [react()],
})
