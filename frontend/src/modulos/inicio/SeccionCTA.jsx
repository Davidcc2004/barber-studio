import { motion } from 'motion/react'
import Boton from '@/componentes/Boton'

export default function SeccionCTA() {
  return (
    <section className="py-32 bg-[#050505] relative z-20 flex flex-col items-center justify-center border-t border-[#111]">
      <div className="contenedor text-center max-w-3xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-6"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          ¿Listo para <span className="texto-metalico font-normal">renovar tu estilo?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#888] text-base sm:text-lg mb-12 font-light"
        >
          Reserva tu cita y vive la experiencia <strong className="text-[#C0C0C0] font-normal tracking-wide">DC Barber Studio</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Boton variante="metalico" to="/reservar" clasesAdicionales="px-10 py-4 text-sm tracking-widest uppercase">
            Reservar Cita
          </Boton>
        </motion.div>

      </div>
    </section>
  )
}
