import { motion } from 'motion/react'
import TarjetaServicio from '@/componentes/TarjetaServicio'

export default function SeccionServicios() {
  // Datos temporales (mock) con los servicios sugeridos
  const servicios = [
    {
      id: 1,
      icono: '✂️',
      nombre: 'Corte Clásico',
      descripcion: 'Corte tradicional a tijera o máquina. Incluye lavado previo, asesoramiento de estilo, peinado y aplicación de productos premium.',
      duracion: '45 MIN',
      precio: 25,
    },
    {
      id: 2,
      icono: '🔥',
      nombre: 'Fade Premium',
      descripcion: 'Degradado perfecto de cero o navaja. Acabado pulido al milímetro con transiciones impecables y perfilado meticuloso.',
      duracion: '60 MIN',
      precio: 30,
    },
    {
      id: 3,
      icono: '🧔',
      nombre: 'Barba & Perfilado',
      descripcion: 'Diseño y recorte de barba con toalla caliente, masaje facial relajante, perfilado a navaja e hidratación con aceites.',
      duracion: '30 MIN',
      precio: 20,
    },
    {
      id: 4,
      icono: '👑',
      nombre: 'Experiencia DC',
      descripcion: 'El servicio más exclusivo. Corte premium, arreglo de barba, mascarilla facial negra, masaje craneal y bebida de cortesía.',
      duracion: '90 MIN',
      precio: 55,
    },
  ]

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-[#0A0A0A] relative z-20">
      {/* Fondo con textura muy sutil */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, #1A1A1A 0%, transparent 70%)'
        }}
      />

      <div className="contenedor relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888] mb-4"
          >
            Excelencia en cada detalle
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-6"
            style={{ fontFamily: 'var(--fuente-decorativa)' }}
          >
            Nuestros <span className="texto-metalico font-normal">Servicios</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] mx-auto"
            style={{ background: 'var(--gradiente-separador)' }}
          />
        </div>

        {/* Grid de tarjetas de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicios.map((servicio, indice) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: indice * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <TarjetaServicio {...servicio} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
