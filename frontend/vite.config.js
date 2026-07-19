// Configuración principal de Vite para el cliente de Barber Studio
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin oficial de Tailwind CSS v4 para Vite
  ],
  resolve: {
    alias: {
      // Alias para importaciones absolutas desde src/
      '@': '/src',
    },
  },
})
