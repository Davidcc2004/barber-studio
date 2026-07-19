import { motion } from 'motion/react'

export default function SelectorTarjeta({ children, seleccionado, onClick, clasesAdicionales = '' }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`relative text-left p-6 rounded-[1rem] border cursor-pointer transition-all duration-400 group overflow-hidden ${
        seleccionado
          ? 'border-[#C0C0C0]/60 bg-[#111111]'
          : 'border-[#2A2A2A] bg-[#111111] hover:border-[#444]'
      } ${clasesAdicionales}`}
    >
      {/* Línea metálica superior (visible si está seleccionado) */}
      <div 
        className={`absolute top-0 left-0 w-full h-[2px] transition-opacity duration-400 ${
          seleccionado ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'var(--gradiente-metalico)' }}
      />

      {/* Glow de fondo si está seleccionado */}
      {seleccionado && (
        <motion.div
          layoutId="selector-glow"
          className="absolute inset-0 pointer-events-none rounded-[1rem]"
          style={{ 
            background: 'radial-gradient(circle at top, rgba(192,192,192,0.06) 0%, transparent 60%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.button>
  )
}
