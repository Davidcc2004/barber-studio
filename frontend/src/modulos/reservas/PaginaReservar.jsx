import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

import IndicadorPasos from '@/componentes/IndicadorPasos'
import Toast, { useToast } from '@/componentes/Toast'
import Boton from '@/componentes/Boton'

// Pasos
import PasoSeleccionServicio from './PasoSeleccionServicio'
import PasoSeleccionFecha from './PasoSeleccionFecha'
import PasoSeleccionHora from './PasoSeleccionHora'
import PasoSeleccionBarbero from './PasoSeleccionBarbero'
import PasoDatosCliente from './PasoDatosCliente'
import PasoResumenReserva from './PasoResumenReserva'

export default function PaginaReservar() {
  const navigate = useNavigate()
  const { toasts, mostrar: mostrarToast } = useToast()

  const [pasoActual, setPasoActual] = useState(1)
  
  // Estado global de la reserva (Preparado para IA y Base de datos)
  const [reserva, setReserva] = useState({
    servicio: null,
    fecha: null,
    hora: null,
    barbero: null,
    cliente: '',
    celular: '',
    observaciones: ''
  })

  const actualizarReserva = (nuevosDatos) => {
    setReserva((prev) => ({ ...prev, ...nuevosDatos }))
  }

  // Definición de los pasos del Wizard
  const pasos = [
    { 
      id: 1, 
      etiqueta: 'Servicio', 
      componente: PasoSeleccionServicio,
      valido: reserva.servicio !== null 
    },
    { 
      id: 2, 
      etiqueta: 'Fecha', 
      componente: PasoSeleccionFecha,
      valido: reserva.fecha !== null 
    },
    { 
      id: 3, 
      etiqueta: 'Hora', 
      componente: PasoSeleccionHora,
      valido: reserva.hora !== null 
    },
    { 
      id: 4, 
      etiqueta: 'Barbero', 
      componente: PasoSeleccionBarbero,
      valido: reserva.barbero !== null 
    },
    { 
      id: 5, 
      etiqueta: 'Datos', 
      componente: PasoDatosCliente,
      valido: reserva.cliente.trim() !== '' && reserva.celular.trim().length >= 10
    },
    { 
      id: 6, 
      etiqueta: 'Resumen', 
      componente: PasoResumenReserva,
      valido: true
    }
  ]

  const avanzarPaso = () => {
    const paso = pasos[pasoActual - 1]
    if (!paso.valido) {
      mostrarToast({ 
        mensaje: 'Por favor, completa este paso para continuar.', 
        tipo: 'advertencia' 
      })
      return
    }
    if (pasoActual < pasos.length) {
      setPasoActual(pasoActual + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const retrocederPaso = () => {
    if (pasoActual > 1) {
      setPasoActual(pasoActual - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const confirmarReserva = () => {
    // Simulación temporal
    mostrarToast({
      mensaje: '¡Reserva simulada correctamente!',
      tipo: 'exito',
      duracion: 4000
    })
    
    // Redirigir al inicio después de unos segundos
    setTimeout(() => {
      navigate('/')
    }, 4000)
  }

  const PasoActualComponente = pasos[pasoActual - 1].componente

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C0C0C0]/30 relative pt-10 pb-24">
      <Toast toasts={toasts} />
      
      {/* Botón Volver */}
      <div className="contenedor mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#888] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium"
        >
          <span>←</span> Volver al inicio
        </Link>
      </div>

      <div className="contenedor">
        <IndicadorPasos 
          pasoActual={pasoActual} 
          totalPasos={pasos.length} 
          etiquetas={pasos.map(p => p.etiqueta)} 
        />
        
        {/* Contenedor animado de los pasos */}
        <div className="min-h-[50vh] mt-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pasoActual}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <PasoActualComponente 
                reserva={reserva} 
                actualizarReserva={actualizarReserva}
                alConfirmar={confirmarReserva}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles de Navegación (Ocultos en el último paso) */}
        {pasoActual < pasos.length && (
          <div className="max-w-2xl mx-auto mt-16 flex items-center justify-between border-t border-[#1A1A1A] pt-8">
            <Boton 
              variante="fantasma" 
              onClick={retrocederPaso}
              clasesAdicionales={`text-sm tracking-widest ${pasoActual === 1 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              ← Anterior
            </Boton>
            
            <Boton 
              variante={pasos[pasoActual - 1].valido ? 'primario' : 'secundario'}
              onClick={avanzarPaso}
              clasesAdicionales={`text-sm tracking-widest uppercase px-8 ${!pasos[pasoActual - 1].valido ? 'opacity-50' : ''}`}
            >
              Siguiente →
            </Boton>
          </div>
        )}
      </div>
    </main>
  )
}
