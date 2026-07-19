import { motion } from 'motion/react'
import { horariosMock, horariosOcupadosMock } from './datosReservasMock'

export default function PasoSeleccionHora({ reserva, actualizarReserva }) {
  const estaOcupado = (hora) => horariosOcupadosMock.includes(hora)

  // En sábados, solo hasta las 18:00
  const esSabado = reserva.fecha ? new Date(reserva.fecha).getDay() === 6 : false
  const horariosDelDia = esSabado 
    ? horariosMock.filter((h) => parseInt(h.split(':')[0]) < 18)
    : horariosMock

  const seleccionarHora = (hora) => {
    if (estaOcupado(hora)) return
    actualizarReserva({ hora })
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          ¿A qué hora <span className="texto-metalico font-normal">te esperamos?</span>
        </h2>
        <p className="text-[#888] text-sm font-light">
          {reserva.fecha && (
            <>
              Horarios para el{' '}
              <span className="text-white font-medium">
                {new Date(reserva.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Leyenda */}
      <div className="flex justify-center gap-6 mb-8 text-[0.65rem] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#111111] border border-[#2A2A2A]" />
          <span className="text-[#C0C0C0]">Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span className="text-white">Seleccionado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0A0A0A] border border-[#111111]" />
          <span className="text-[#444]">Ocupado</span>
        </div>
      </div>

      {/* Grid de chips de horarios */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
        {horariosDelDia.map((hora, index) => {
          const ocupado = estaOcupado(hora)
          const seleccionado = reserva.hora === hora

          return (
            <motion.button
              key={hora}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              onClick={() => seleccionarHora(hora)}
              disabled={ocupado}
              className={`py-3 px-4 rounded-sm text-sm font-medium transition-all duration-300 ${
                ocupado
                  ? 'bg-[#0A0A0A] text-[#444] cursor-not-allowed border border-[#111111]'
                  : seleccionado
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white'
                    : 'bg-[#111111] text-[#C0C0C0] border border-[#2A2A2A] hover:border-[#888] hover:text-white cursor-pointer'
              }`}
            >
              {hora}
            </motion.button>
          )
        })}
      </div>

      {/* Hora seleccionada */}
      {reserva.hora && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-8 py-4 border-t border-[#2A2A2A]"
        >
          <span className="text-[#888] text-xs uppercase tracking-widest">Hora seleccionada</span>
          <p className="text-white text-2xl mt-2 font-medium" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
            {reserva.hora}
          </p>
        </motion.div>
      )}
    </div>
  )
}
