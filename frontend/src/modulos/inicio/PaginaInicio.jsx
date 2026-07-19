import BarraNavegacion from '@/componentes/BarraNavegacion'
import SeccionHero from './SeccionHero'
import SeccionServicios from './SeccionServicios'
import SeccionGaleria from './SeccionGaleria'
import SeccionNosotros from './SeccionNosotros'
import SeccionEquipo from './SeccionEquipo'
import SeccionContacto from './SeccionContacto'
import SeccionCTA from './SeccionCTA'
import BotonWhatsApp from '@/componentes/BotonWhatsApp'
import PiePagina from '@/componentes/PiePagina'
import { motion } from 'motion/react'

// Wrapper para darle una animación de entrada global a cada sección
function FadeInSeccion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function PaginaInicio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C0C0C0]/30 relative">
      <BarraNavegacion />
      
      {/* El Hero no se envuelve porque tiene sus propias animaciones de carga inicial */}
      <SeccionHero />

      <FadeInSeccion><SeccionServicios /></FadeInSeccion>
      <FadeInSeccion><SeccionGaleria /></FadeInSeccion>
      <FadeInSeccion><SeccionNosotros /></FadeInSeccion>
      <FadeInSeccion><SeccionEquipo /></FadeInSeccion>
      <FadeInSeccion><SeccionContacto /></FadeInSeccion>
      <FadeInSeccion><SeccionCTA /></FadeInSeccion>
      
      {/* Botón flotante global para la landing */}
      <BotonWhatsApp />

      <PiePagina />
    </main>
  )
}
