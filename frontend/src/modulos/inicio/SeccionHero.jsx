import { motion } from 'motion/react'
import Boton from '@/componentes/Boton'

export default function SeccionHero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Imagen de fondo discreta con opacidad muy baja para no competir */}
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Gradientes oscuros para dar profundidad extrema */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent to-[#0A0A0A] pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 20%, #0A0A0A 100%)'}} />

      {/* Contenedor central */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto">
        
        {/* Línea decorativa animada */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px mb-6 md:mb-10"
          style={{ background: 'var(--gradiente-separador)' }}
        />

        {/* Logo DC animado */}
        <motion.h1
          initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="logo-dc text-[6rem] sm:text-[9rem] md:text-[13rem] lg:text-[16rem] ml-[0.15em]"
        >
          DC
        </motion.h1>

        {/* Subtítulo elegante */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="logo-subtitulo text-[0.65rem] sm:text-xs md:text-sm mt-0 mb-12 sm:mb-16 ml-[0.5em]"
        >
          BARBER STUDIO
        </motion.p>

        {/* Botones CTA eliminados por petición del usuario */}

      </div>

      {/* Indicador de Scroll animado interactivo */}
      <motion.button
        type="button"
        onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#555] group-hover:text-white transition-colors duration-300">
          Descubrir
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#555] to-transparent group-hover:from-white transition-colors duration-300"
        />
      </motion.button>
    </section>
  )
}
