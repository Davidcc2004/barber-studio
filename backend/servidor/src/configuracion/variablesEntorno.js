// Variables de entorno del servidor — Barber Studio
// Centraliza la lectura y validación de todas las variables de entorno del backend.
import 'dotenv/config'

export const configuracion = {
  // Servidor
  puerto: process.env.PUERTO || 3000,
  entorno: process.env.NODE_ENV || 'desarrollo',

  // Supabase (solo en el backend, nunca en el frontend)
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,

  // CORS — origen permitido del frontend
  origenFrontend: process.env.ORIGEN_FRONTEND || 'http://localhost:5173',
}
