import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

export default function Boton({ 
  children, 
  variante = 'primario', 
  onClick, 
  to,
  clasesAdicionales = '',
  tipo = 'button'
}) {
  const navigate = useNavigate()
  const clasesBase = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 rounded-sm cursor-pointer"
  
  const estilosVariante = {
    primario: "bg-white text-black hover:bg-gray-200 shadow-md",
    secundario: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    fantasma: "bg-transparent text-white hover:text-gray-300"
  }

  const manejarClick = (e) => {
    if (onClick) onClick(e)
    if (to) navigate(to)
  }

  // Variante premium con la identidad visual metálica de la marca
  if (variante === 'metalico') {
    return (
      <motion.button
        type={tipo}
        onClick={manejarClick}
        className={`inline-flex items-center justify-center px-8 py-3 text-black font-semibold rounded-sm cursor-pointer brillo-metalico-hover ${clasesAdicionales}`}
        style={{
          background: 'var(--gradiente-metalico-boton)',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      type={tipo}
      onClick={manejarClick}
      className={`${clasesBase} ${estilosVariante[variante] || estilosVariante.primario} ${clasesAdicionales}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
