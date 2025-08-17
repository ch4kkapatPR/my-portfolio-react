// vite.config.js - ปรับแต่งสำหรับ deployment
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})