import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function ModalGaleria({ imagenSeleccionada, isOpen, onClose }) {
  // Bloquear el scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && imagenSeleccionada && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          {/* Botón de cerrar */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#C0C0C0] transition-colors z-[110] p-2"
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Contenido de la imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Evita cerrar si se hace click en la imagen
          >
            <img 
              src={imagenSeleccionada.url} 
              alt={imagenSeleccionada.titulo}
              className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-[#2A2A2A]"
            />
            
            {/* Texto debajo de la imagen en el modal */}
            <div className="mt-6 text-center">
              <h3 
                className="text-2xl text-white tracking-widest mb-1"
                style={{ fontFamily: 'var(--fuente-decorativa)' }}
              >
                {imagenSeleccionada.titulo}
              </h3>
              <p className="text-[#888888] uppercase tracking-[0.2em] text-xs">
                {imagenSeleccionada.estilo}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
