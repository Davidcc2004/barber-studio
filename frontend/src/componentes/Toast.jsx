import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Cola de toasts para mostrar múltiples notificaciones
let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const mostrar = useCallback(({ mensaje, tipo = 'exito', duracion = 3000 }) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, mensaje, tipo }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, duracion)
  }, [])

  return { toasts, mostrar }
}

export default function Toast({ toasts }) {
  const iconos = {
    exito: '✓',
    error: '✕',
    info: 'ℹ',
    advertencia: '⚠',
  }

  const colores = {
    exito: 'border-[#4CAF50]/40 text-[#4CAF50]',
    error: 'border-[#F44336]/40 text-[#F44336]',
    info: 'border-[#2196F3]/40 text-[#2196F3]',
    advertencia: 'border-[#FF9800]/40 text-[#FF9800]',
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-center gap-3 bg-[#111111] border ${colores[toast.tipo] || colores.exito} backdrop-blur-md px-6 py-3 rounded-sm shadow-lg pointer-events-auto`}
          >
            <span className="text-lg font-bold">{iconos[toast.tipo] || iconos.exito}</span>
            <span className="text-white text-sm font-light">{toast.mensaje}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
