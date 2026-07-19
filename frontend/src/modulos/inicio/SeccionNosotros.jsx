import { motion } from 'motion/react'

export default function SeccionNosotros() {
  const valores = [
    {
      titulo: 'Precisión',
      texto: 'Cada corte se realiza con técnica y atención absoluta al detalle.',
    },
    {
      titulo: 'Experiencia',
      texto: 'Buscamos que cada visita sea cómoda, relajante y profesional.',
    },
    {
      titulo: 'Estilo',
      texto: 'Adaptamos cada servicio a la personalidad y necesidades de nuestros clientes.',
    }
  ]

  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-[#050505] relative z-20 border-t border-[#111]">
      <div className="contenedor">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Columna de Texto */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888] mb-4"
            >
              Nuestra Filosofía
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-8"
              style={{ fontFamily: 'var(--fuente-decorativa)' }}
            >
              Más que una <br className="hidden sm:block"/>
              <span className="texto-metalico font-normal">barbería</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-12 font-light max-w-lg"
            >
              En <strong className="text-[#E8E8E8] font-medium tracking-wider">DC BARBER STUDIO</strong> creemos que un corte de cabello no es solo un servicio; es una forma de expresar identidad, seguridad y estilo. Cada detalle está pensado para ofrecer una experiencia premium, desde el primer saludo hasta el último retoque.
            </motion.p>

            {/* Valores - Animación Secuencial al hacer scroll */}
            <div className="flex flex-col gap-8 border-l border-[#2A2A2A] pl-6 sm:pl-8">
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.titulo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2), ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-white tracking-[0.2em] uppercase text-sm mb-2" style={{ fontFamily: 'var(--fuente-principal)' }}>
                    {valor.titulo}
                  </h3>
                  <p className="text-[#777] text-sm font-light leading-relaxed">
                    {valor.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna de Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-sm overflow-hidden"
          >
            {/* Imagen elegante de barbero trabajando (Unsplash) */}
            <img 
              src="https://images.unsplash.com/photo-1520698188176-7bc285c5d0ba?q=80&w=1000&auto=format&fit=crop"
              alt="Barbero trabajando en DC Barber Studio"
              className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-125 hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Gradientes para fundir la imagen con el fondo oscuro y no verse cortada */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent lg:w-1/3 pointer-events-none" />
            
            {/* Borde metálico sutil sobre la imagen */}
            <div className="absolute inset-0 border border-[#C0C0C0]/10 rounded-sm pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
