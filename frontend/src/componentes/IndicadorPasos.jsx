import { motion } from 'motion/react'

export default function IndicadorPasos({ pasoActual, totalPasos, etiquetas }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12 px-4">
      <div className="flex items-center justify-between relative">
        {/* Línea de fondo (gris) */}
        <div className="absolute top-5 left-0 w-full h-[1px] bg-[#2A2A2A]" />
        
        {/* Línea de progreso (metálica) */}
        <motion.div 
          className="absolute top-5 left-0 h-[1px]"
          style={{ background: 'var(--gradiente-metalico)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${((pasoActual - 1) / (totalPasos - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Círculos de cada paso */}
        {etiquetas.map((etiqueta, index) => {
          const numeroPaso = index + 1
          const esActivo = numeroPaso === pasoActual
          const esCompletado = numeroPaso < pasoActual

          return (
            <div key={etiqueta} className="flex flex-col items-center relative z-10">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border transition-colors duration-300 ${
                  esCompletado
                    ? 'bg-[#C0C0C0] border-[#C0C0C0] text-[#0A0A0A]'
                    : esActivo
                      ? 'bg-[#0A0A0A] border-[#C0C0C0] text-white'
                      : 'bg-[#111111] border-[#2A2A2A] text-[#555]'
                }`}
                animate={esActivo ? { 
                  boxShadow: '0 0 15px rgba(192,192,192,0.3)' 
                } : { 
                  boxShadow: '0 0 0px rgba(0,0,0,0)' 
                }}
                transition={{ duration: 0.3 }}
              >
                {esCompletado ? '✓' : numeroPaso}
              </motion.div>
              
              {/* Etiqueta del paso (visible solo en pantallas medianas+) */}
              <span className={`hidden sm:block mt-3 text-[0.6rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
                esActivo ? 'text-white' : esCompletado ? 'text-[#C0C0C0]' : 'text-[#555]'
              }`}>
                {etiqueta}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
