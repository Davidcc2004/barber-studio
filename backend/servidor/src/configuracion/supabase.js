// Configuración de la conexión con Supabase — Barber Studio
// Este archivo inicializa el cliente de Supabase usando variables de entorno.
// Las credenciales NUNCA deben escribirse directamente aquí.
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validar que las variables de entorno estén definidas
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    '[Supabase] Faltan las variables de entorno SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY. ' +
    'Verifica el archivo .env del servidor.'
  )
}

// Cliente de Supabase — se exporta para usarse en los repositorios
export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
