import { motion } from 'motion/react'
import SelectorTarjeta from '@/componentes/SelectorTarjeta'
import { barberosMock } from './datosReservasMock'

export default function PasoSeleccionBarbero({ reserva, actualizarReserva }) {
  const seleccionarBarbero = (barbero) => {
    actualizarReserva({ barbero })
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          Elige a tu <span className="texto-metalico font-normal">barbero</span>
        </h2>
        <p className="text-[#888] text-sm font-light">Todos nuestros profesionales están disponibles para ti.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {barberosMock.map((barbero, index) => (
          <motion.div
            key={barbero.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SelectorTarjeta
              seleccionado={reserva.barbero?.id === barbero.id}
              onClick={() => seleccionarBarbero(barbero)}
              clasesAdicionales="!p-0 overflow-hidden"
            >
              {/* Foto */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#050505]">
                <img 
                  src={barbero.foto}
                  alt={barbero.nombre}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    reserva.barbero?.id === barbero.id ? 'grayscale-0 scale-105' : 'grayscale-[30%]'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-white text-xl mb-1" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
                  {barbero.nombre}
                </h3>
                <p className="text-[#C0C0C0] text-[0.65rem] uppercase tracking-[0.2em] mb-3">
                  {barbero.cargo}
                </p>
                <p className="text-[#888] text-xs font-light leading-relaxed">
                  {barbero.especialidad}
                </p>
              </div>
            </SelectorTarjeta>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
