import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import Boton from './Boton'

export default function BarraNavegacion() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Efecto para cambiar el estilo de la barra al hacer scroll
  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', manejarScroll)
    return () => window.removeEventListener('scroll', manejarScroll)
  }, [])

  // Datos temporales (mock)
  const enlaces = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Servicios', ruta: '#servicios' },
    { nombre: 'Galería', ruta: '#galeria' },
    { nombre: 'Nosotros', ruta: '#nosotros' },
    { nombre: 'Equipo', ruta: '#equipo' },
    { nombre: 'Contacto', ruta: '#contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="contenedor flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center z-50 relative">
          <span className="logo-dc text-3xl">DC</span>
          <span className="logo-subtitulo text-[0.5rem] mt-1">BARBER STUDIO</span>
        </Link>

        {/* Enlaces Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.ruta}
              className="text-sm font-medium text-white hover:text-[#C0C0C0] transition-colors"
            >
              {enlace.nombre}
            </a>
          ))}
        </nav>

        {/* Botón Reservar Desktop */}
        <div className="hidden md:block">
          <Boton variante="metalico" to="/reservar">Reservar Cita</Boton>
        </div>

        {/* Botón Menú Mobile (Hamburguesa) */}
        <button
          className="md:hidden text-white z-50 p-2 cursor-pointer"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Menú Mobile Overlay */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.ruta}
                onClick={() => setMenuAbierto(false)}
                className="text-2xl font-medium text-white hover:text-[#C0C0C0] transition-colors"
              >
                {enlace.nombre}
              </a>
            ))}
            <div className="mt-4">
              <Boton 
                variante="metalico" 
                to="/reservar"
                onClick={() => setMenuAbierto(false)}
              >
                Reservar Cita
              </Boton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
