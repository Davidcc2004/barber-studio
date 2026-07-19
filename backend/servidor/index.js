// Servidor principal de Barber Studio — Node.js + Express
// Punto de entrada del backend. Configura middlewares, rutas y arranque del servidor.
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { configuracion } from './src/configuracion/variablesEntorno.js'
import { manejadorErrores } from './src/middleware/manejadorErrores.js'

const app = express()

// ---- Middlewares globales ----
app.use(
  cors({
    origin: configuracion.origenFrontend,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ---- Ruta de salud del servidor ----
app.get('/api/estado', (_req, res) => {
  res.json({
    exito: true,
    mensaje: 'Servidor de Barber Studio funcionando correctamente',
    entorno: configuracion.entorno,
    timestamp: new Date().toISOString(),
  })
})

// ---- Rutas de la API (se agregarán en los siguientes módulos) ----
// import citasRutas from './src/rutas/citasRutas.js'
// import clientesRutas from './src/rutas/clientesRutas.js'
// import serviciosRutas from './src/rutas/serviciosRutas.js'
// import reportesRutas from './src/rutas/reportesRutas.js'
// app.use('/api/citas', citasRutas)
// app.use('/api/clientes', clientesRutas)
// app.use('/api/servicios', serviciosRutas)
// app.use('/api/reportes', reportesRutas)

// ---- Ruta no encontrada ----
app.use((_req, res) => {
  res.status(404).json({
    exito: false,
    mensaje: 'Ruta no encontrada',
  })
})

// ---- Manejador global de errores (debe ir de último) ----
app.use(manejadorErrores)

// ---- Arranque del servidor ----
app.listen(configuracion.puerto, () => {
  console.log(`✂  Barber Studio — Servidor corriendo en http://localhost:${configuracion.puerto}`)
  console.log(`   Entorno: ${configuracion.entorno}`)
  console.log(`   Frontend permitido: ${configuracion.origenFrontend}`)
})
