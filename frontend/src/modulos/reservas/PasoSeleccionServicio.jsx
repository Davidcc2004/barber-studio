import { motion } from 'motion/react'
import SelectorTarjeta from '@/componentes/SelectorTarjeta'
import { serviciosMock } from './datosReservasMock'

export default function PasoSeleccionServicio({ reserva, actualizarReserva }) {
  const seleccionarServicio = (servicio) => {
    actualizarReserva({ servicio })
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          ¿Qué servicio <span className="texto-metalico font-normal">necesitas?</span>
        </h2>
        <p className="text-[#888] text-sm font-light">Selecciona el servicio que deseas reservar.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {serviciosMock.map((servicio, index) => (
          <motion.div
            key={servicio.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SelectorTarjeta
              seleccionado={reserva.servicio?.id === servicio.id}
              onClick={() => seleccionarServicio(servicio)}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{servicio.icono}</span>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-medium mb-1">{servicio.nombre}</h3>
                  <p className="text-[#888] text-xs font-light mb-4 leading-relaxed">{servicio.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#555] text-xs uppercase tracking-widest">{servicio.duracion} min</span>
                    <span className="text-white font-medium text-lg">${servicio.precio}</span>
                  </div>
                </div>
              </div>
            </SelectorTarjeta>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
