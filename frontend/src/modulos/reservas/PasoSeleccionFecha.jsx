import { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { diasSemana, mesesEspanol } from './datosReservasMock'

export default function PasoSeleccionFecha({ reserva, actualizarReserva }) {
  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)

  // Generar los próximos 14 días
  const diasDisponibles = useMemo(() => {
    const dias = []
    for (let i = 0; i < 14; i++) {
      const fecha = new Date(hoy)
      fecha.setDate(hoy.getDate() + i)
      dias.push(fecha)
    }
    return dias
  }, [])

  const esDomingo = (fecha) => fecha.getDay() === 0
  const esHoy = (fecha) => fecha.toDateString() === hoy.toDateString()

  const estaSeleccionado = (fecha) => {
    if (!reserva.fecha) return false
    return fecha.toDateString() === new Date(reserva.fecha).toDateString()
  }

  const seleccionarFecha = (fecha) => {
    if (esDomingo(fecha)) return
    actualizarReserva({ 
      fecha: fecha.toISOString(), 
      hora: null // Limpiar hora al cambiar fecha
    })
  }

  // Agrupar por semana para mostrar el calendario
  const mesActual = diasDisponibles[0] ? mesesEspanol[diasDisponibles[0].getMonth()] : ''
  const anioActual = diasDisponibles[0] ? diasDisponibles[0].getFullYear() : ''

  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          ¿Qué día <span className="texto-metalico font-normal">prefieres?</span>
        </h2>
        <p className="text-[#888] text-sm font-light">Los domingos no atendemos.</p>
      </div>

      <div className="max-w-xl mx-auto">
        {/* Mes y año */}
        <div className="text-center mb-8">
          <span className="text-white text-sm tracking-[0.2em] uppercase font-medium">
            {mesActual} {anioActual}
          </span>
        </div>

        {/* Encabezados de los días de la semana */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {diasSemana.map((dia) => (
            <div key={dia} className="text-center text-[0.6rem] text-[#555] uppercase tracking-widest font-medium">
              {dia}
            </div>
          ))}
        </div>

        {/* Grid de días */}
        <div className="grid grid-cols-7 gap-2">
          {/* Espacios vacíos para alinear el primer día con su día de la semana */}
          {(() => {
            const primerDia = diasDisponibles[0]
            if (!primerDia) return null
            // getDay() devuelve 0=Dom, 1=Lun... Necesitamos 0=Lun, 6=Dom
            const offset = primerDia.getDay() === 0 ? 6 : primerDia.getDay() - 1
            return Array.from({ length: offset }, (_, i) => (
              <div key={`vacio-${i}`} />
            ))
          })()}

          {diasDisponibles.map((fecha, index) => {
            const domingo = esDomingo(fecha)
            const seleccionada = estaSeleccionado(fecha)
            const hoyMismo = esHoy(fecha)

            return (
              <motion.button
                key={fecha.toISOString()}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => seleccionarFecha(fecha)}
                disabled={domingo}
                className={`relative aspect-square rounded-sm flex flex-col items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer ${
                  domingo
                    ? 'text-[#333] cursor-not-allowed line-through'
                    : seleccionada
                      ? 'bg-[#C0C0C0] text-[#0A0A0A] shadow-[0_0_15px_rgba(192,192,192,0.3)]'
                      : 'text-white hover:bg-[#1C1C1C] border border-[#2A2A2A] hover:border-[#555]'
                }`}
              >
                <span className="text-lg">{fecha.getDate()}</span>
                {hoyMismo && !seleccionada && (
                  <span className="absolute bottom-1 w-1 h-1 bg-[#C0C0C0] rounded-full" />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Fecha seleccionada */}
        {reserva.fecha && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8 py-4 border-t border-[#2A2A2A]"
          >
            <span className="text-[#888] text-xs uppercase tracking-widest">Fecha seleccionada</span>
            <p className="text-white text-lg mt-2 font-medium" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
              {new Date(reserva.fecha).toLocaleDateString('es-ES', { 
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
              })}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
