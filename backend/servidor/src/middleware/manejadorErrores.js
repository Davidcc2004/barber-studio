// Middleware de manejo de errores global — Barber Studio
// Captura cualquier error lanzado en los controladores y devuelve una respuesta uniforme.

/**
 * Middleware de errores de Express.
 * Se registra DESPUÉS de todas las rutas en index.js.
 */
export function manejadorErrores(error, req, res, _next) {
  const estado = error.estado || 500
  const mensaje = error.message || 'Error interno del servidor'

  console.error(`[Error ${estado}] ${req.method} ${req.url} — ${mensaje}`)

  res.status(estado).json({
    exito: false,
    mensaje,
    // Solo mostrar el stack en desarrollo
    ...(process.env.NODE_ENV === 'desarrollo' && { detalle: error.stack }),
  })
}
