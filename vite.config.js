import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT || 5173, // Use the PORT environment variable if available, fallback to 5173
    proxy: {
      '/api': {
        target: 'https://fcds-backend.onrender.com',
        changeOrigin: true,
        secure: false, // Set to true if your backend uses HTTPS and requires SSL verification
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional, modify path if needed
      }
    }
  }
})
