import { motion } from 'motion/react'

export default function SeccionEquipo() {
  const equipo = [
    {
      id: 1,
      nombre: 'David C',
      cargo: 'Fundador & Master Barber',
      especialidad: 'Especialista en fades, cortes clásicos y asesoría de imagen masculina.',
      experiencia: '8 años de experiencia',
      instagram: '#',
      foto: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop', // Retrato masculino elegante
    },
    {
      id: 2,
      nombre: 'Andrés M',
      cargo: 'Senior Barber',
      especialidad: 'Experto en barbas largas, toalla caliente y texturizados modernos.',
      experiencia: '5 años de experiencia',
      instagram: '#',
      foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop', 
    },
    {
      id: 3,
      nombre: 'Javier R',
      cargo: 'Estilista & Barber',
      especialidad: 'Perfeccionista en diseño de líneas, mullet y estilos vanguardistas.',
      experiencia: '6 años de experiencia',
      instagram: '#',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', 
    }
  ]

  return (
    <section id="equipo" className="py-24 sm:py-32 bg-[#0A0A0A] relative z-20">
      {/* Fondo con leve iluminación radial para dar profundidad */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at top, #1A1A1A 0%, transparent 60%)'
        }}
      />

      <div className="contenedor relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888] mb-4"
          >
            Profesionalismo y Talento
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-6"
            style={{ fontFamily: 'var(--fuente-decorativa)' }}
          >
            Nuestro <span className="texto-metalico font-normal">Equipo</span>
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

        {/* Grilla de Tarjetas del Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {equipo.map((miembro, index) => (
            <motion.div
              key={miembro.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#111111] rounded-[1rem] p-6 border border-[#2A2A2A] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Iluminación metálica en hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1rem]"
                style={{ 
                  boxShadow: 'inset 0 0 0 1px rgba(192,192,192,0.3)',
                  background: 'radial-gradient(circle at top, rgba(192,192,192,0.05) 0%, transparent 70%)'
                }}
              />

              {/* Foto con zoom en hover */}
              <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden mb-6 bg-[#050505]">
                <img 
                  src={miembro.foto} 
                  alt={miembro.nombre}
                  className="w-full h-full object-cover filter grayscale-[20%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              {/* Contenido (Nombre y Rol) */}
              <div className="text-center mb-4 relative z-10">
                <h3 className="text-2xl text-white tracking-wide mb-1" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
                  {miembro.nombre}
                </h3>
                <p className="text-[#C0C0C0] text-xs uppercase tracking-[0.2em] font-medium">
                  {miembro.cargo}
                </p>
              </div>

              {/* Detalles y Especialidad */}
              <div className="border-t border-[#2A2A2A] pt-4 mt-4 relative z-10 text-center">
                <p className="text-[#888888] text-sm font-light leading-relaxed mb-4">
                  {miembro.especialidad}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#555] text-xs font-medium uppercase tracking-wider">
                    {miembro.experiencia}
                  </span>
                  
                  {/* Icono de Instagram sutil */}
                  <a 
                    href={miembro.instagram}
                    className="text-[#888] hover:text-white transition-colors duration-300 p-2"
                    aria-label={`Instagram de ${miembro.nombre}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
