import { motion } from 'motion/react'

export default function PasoDatosCliente({ reserva, actualizarReserva }) {
  const manejarCambio = (campo, valor) => {
    actualizarReserva({ [campo]: valor })
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          Tus <span className="texto-metalico font-normal">datos</span>
        </h2>
        <p className="text-[#888] text-sm font-light">No necesitas crear una cuenta. Solo tu nombre y celular.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto flex flex-col gap-6"
      >
        {/* Nombre */}
        <div>
          <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#888] mb-3 font-medium">
            Nombre completo *
          </label>
          <input 
            type="text"
            value={reserva.cliente || ''}
            onChange={(e) => manejarCambio('cliente', e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm"
            required
          />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#888] mb-3 font-medium">
            Celular *
          </label>
          <input 
            type="tel"
            value={reserva.celular || ''}
            onChange={(e) => manejarCambio('celular', e.target.value)}
            placeholder="3001234567"
            className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm"
            required
          />
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-[0.65rem] uppercase tracking-[0.2em] text-[#888] mb-3 font-medium">
            Observaciones <span className="text-[#555]">(opcional)</span>
          </label>
          <textarea
            value={reserva.observaciones || ''}
            onChange={(e) => manejarCambio('observaciones', e.target.value)}
            placeholder="¿Algo que debamos saber? Estilo preferido, alergias..."
            rows="4"
            className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm resize-none"
          />
        </div>
      </motion.div>
    </div>
  )
}
