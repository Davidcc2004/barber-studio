import { motion } from 'motion/react'

// Componente reutilizable para mostrar los datos de una reserva.
// Se usará en: PasoResumenReserva, pantalla de confirmación,
// y en el futuro en el panel de administración.
export default function ResumenReserva({ reserva }) {
  const fechaFormateada = reserva.fecha
    ? new Date(reserva.fecha).toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '—'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-md mx-auto bg-[#111111] border border-[#2A2A2A] rounded-[1rem] overflow-hidden"
    >
      {/* Cabecera del ticket */}
      <div className="text-center py-8 border-b border-[#2A2A2A]">
        <span className="logo-dc text-3xl">DC</span>
        <p className="text-[#888] text-[0.5rem] tracking-[0.5em] uppercase mt-1">Barber Studio</p>
      </div>

      {/* Detalles de la reserva */}
      <div className="px-8 py-6 space-y-5">
        <FilaDetalle etiqueta="Servicio" valor={reserva.servicio?.nombre} />
        <FilaDetalle etiqueta="Barbero" valor={reserva.barbero?.nombre} />
        <FilaDetalle etiqueta="Fecha" valor={fechaFormateada} />
        <FilaDetalle etiqueta="Hora" valor={reserva.hora} />
        
        <div className="border-t border-dashed border-[#2A2A2A] my-2" />
        
        <FilaDetalle etiqueta="Cliente" valor={reserva.cliente} />
        <FilaDetalle etiqueta="Celular" valor={reserva.celular} />
        
        {reserva.observaciones && (
          <FilaDetalle etiqueta="Notas" valor={reserva.observaciones} />
        )}
      </div>

      {/* Total */}
      <div className="px-8 py-6 border-t border-[#2A2A2A] flex justify-between items-center">
        <span className="text-[#888] text-xs uppercase tracking-widest font-medium">Total</span>
        <span className="text-white text-2xl font-medium" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
          ${reserva.servicio?.precio || 0}
        </span>
      </div>

      {/* Duración estimada */}
      <div className="px-8 pb-6 text-center">
        <span className="text-[#555] text-[0.6rem] uppercase tracking-widest">
          Duración estimada: {reserva.servicio?.duracion || 0} min
        </span>
      </div>
    </motion.div>
  )
}

// Componente interno para cada fila del ticket
function FilaDetalle({ etiqueta, valor }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-[#555] text-xs uppercase tracking-widest flex-shrink-0">{etiqueta}</span>
      <span className="text-white text-sm text-right font-light capitalize">{valor || '—'}</span>
    </div>
  )
}
