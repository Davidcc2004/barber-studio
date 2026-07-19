import { motion } from 'motion/react'

export default function PiePagina() {
  const enlacesNavegacion = [
    { nombre: 'Inicio', ruta: '#inicio' },
    { nombre: 'Servicios', ruta: '#servicios' },
    { nombre: 'Galería', ruta: '#galeria' },
    { nombre: 'Nosotros', ruta: '#nosotros' },
    { nombre: 'Contacto', ruta: '#contacto' },
  ]

  const enlacesSociales = [
    { nombre: 'Instagram', ruta: '#' },
    { nombre: 'WhatsApp', ruta: '#' },
    { nombre: 'Facebook', ruta: '#' },
  ]

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#111] py-20 relative z-20">
      <div className="contenedor flex flex-col items-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <span className="logo-dc text-5xl">DC</span>
          <span className="logo-subtitulo text-[0.6rem] mt-2 tracking-[0.5em] text-[#888]">
            BARBER STUDIO
          </span>
        </motion.div>

        {/* Separador 1 */}
        <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent mb-12" />

        {/* Enlaces Principales */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12">
          {enlacesNavegacion.map((enlace) => (
            <a 
              key={enlace.nombre}
              href={enlace.ruta}
              className="text-[#888] hover:text-white transition-colors text-xs tracking-widest uppercase font-medium"
            >
              {enlace.nombre}
            </a>
          ))}
        </nav>

        {/* Separador 2 */}
        <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent mb-12" />

        {/* Redes Sociales */}
        <div className="flex justify-center gap-8 mb-12">
          {enlacesSociales.map((social) => (
            <a 
              key={social.nombre}
              href={social.ruta}
              className="text-[#C0C0C0] hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-light"
            >
              {social.nombre}
            </a>
          ))}
        </div>

        {/* Separador 3 */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent mb-12" />

        {/* Personalidad y Copyright */}
        <div className="text-center">
          <p className="text-[#555] text-xs font-light italic mb-6">
            Diseñado para ofrecer una experiencia premium desde el primer clic.
          </p>
          <p className="text-[#444] text-[0.65rem] uppercase tracking-widest">
            © {new Date().getFullYear()} DC Barber Studio. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}
