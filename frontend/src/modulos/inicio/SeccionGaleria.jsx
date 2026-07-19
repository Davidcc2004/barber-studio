import { useState } from 'react'
import { motion } from 'motion/react'
import ModalGaleria from '@/componentes/ModalGaleria'

export default function SeccionGaleria() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenActiva, setImagenActiva] = useState(null)

  // 6 imágenes seleccionadas para una grilla asimétrica premium
  const imagenes = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
      titulo: 'Signature Cut DC',
      estilo: 'Fade Premium a navaja',
      // Esta ocupará 2 columnas y 2 filas en pantallas medianas/grandes
      claseGrid: 'md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
      titulo: 'Perfilado Clásico',
      estilo: 'Toalla caliente',
      claseGrid: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1512496015851-a1cbfc3ad268?q=80&w=800&auto=format&fit=crop',
      titulo: 'Corte a Tijera',
      estilo: 'Textura superior',
      claseGrid: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1593702288056-cc15f10f443b?q=80&w=800&auto=format&fit=crop',
      titulo: 'Mullet Moderno',
      estilo: 'Estilo Texturizado',
      claseGrid: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop',
      titulo: 'Buzz Cut',
      estilo: 'Fade Alto',
      // Esta ocupará el ancho restante debajo de la principal
      claseGrid: 'md:col-span-2 row-span-1 aspect-[21/9] md:aspect-auto',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
      titulo: 'Pompadour',
      estilo: 'Estilo Old School',
      claseGrid: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    }
  ]

  const abrirModal = (imagen) => {
    setImagenActiva(imagen)
    setModalAbierto(true)
  }

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#0A0A0A] relative z-20">
      <div className="contenedor">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-6"
            style={{ fontFamily: 'var(--fuente-decorativa)' }}
          >
            Nuestro <span className="texto-metalico font-normal">Trabajo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888] font-light max-w-lg mx-auto"
          >
            Cada corte refleja nuestro compromiso con la precisión, el estilo y la calidad más exclusiva.
          </motion.p>
        </div>

        {/* Grilla Asimétrica Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 md:auto-rows-[250px] lg:auto-rows-[300px]">
          {imagenes.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${img.claseGrid} bg-[#111111]`}
              onClick={() => abrirModal(img)}
            >
              {/* Imagen con zoom suave en hover */}
              <img 
                src={img.url} 
                alt={img.titulo}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay oscuro que aparece en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <span className="text-[#C0C0C0] text-[0.65rem] uppercase tracking-[0.3em] font-medium block mb-2">
                    {img.estilo}
                  </span>
                  <h3 
                    className="text-white text-2xl mb-4"
                    style={{ fontFamily: 'var(--fuente-decorativa)' }}
                  >
                    {img.titulo}
                  </h3>
                  
                  {/* Etiqueta "Ver más" sutil */}
                  <span className="inline-flex items-center text-xs text-white uppercase tracking-widest font-light gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    Ver más
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Destello metálico interno en los bordes en hover */}
              <div className="absolute inset-0 border border-[#C0C0C0]/0 group-hover:border-[#C0C0C0]/30 transition-colors duration-500 pointer-events-none rounded-sm" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal ModalGaleria */}
      <ModalGaleria 
        imagenSeleccionada={imagenActiva}
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />

    </section>
  )
}
