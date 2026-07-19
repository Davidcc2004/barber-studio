import { motion } from 'motion/react'
import Boton from '@/componentes/Boton'

export default function SeccionContacto() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-[#050505] relative z-20 border-t border-[#111]">
      <div className="contenedor relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888] mb-4"
          >
            Estamos aquí
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-wide mb-6"
            style={{ fontFamily: 'var(--fuente-decorativa)' }}
          >
            Ponte en <span className="texto-metalico font-normal">Contacto</span>
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

        {/* Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 max-w-6xl mx-auto">
          
          {/* Columna Izquierda: Información y Horarios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl text-white mb-8" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
              Información
            </h3>
            
            <ul className="space-y-6 mb-12 text-[#A0A0A0] font-light text-sm sm:text-base">
              <li className="flex items-start gap-4">
                <span className="text-[#C0C0C0] text-xl mt-0.5">📍</span>
                <span>Av. Principal 1234, Zona Exclusiva<br/>Ciudad del Sol, Código Postal 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#C0C0C0] text-xl">📞</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 234 567 890</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#C0C0C0] text-xl">📱</span>
                <a href="https://wa.me/1234567890" className="hover:text-[#25D366] transition-colors">WhatsApp Directo</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#C0C0C0] text-xl">📧</span>
                <a href="mailto:hola@dcbarber.com" className="hover:text-white transition-colors">hola@dcbarber.com</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#C0C0C0] text-xl">📷</span>
                <a href="#" className="hover:text-white transition-colors">@dcbarberstudio</a>
              </li>
            </ul>

            {/* Tarjeta de Horarios */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-[1rem] p-8 hover:border-[#444] transition-colors">
               <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-8 font-medium">Horarios de Atención</h4>
               <div className="flex justify-between items-center mb-5 border-b border-[#2A2A2A] pb-5">
                 <span className="text-[#888] text-sm">Lunes a Viernes</span>
                 <span className="text-white font-medium">09:00 – 20:00</span>
               </div>
               <div className="flex justify-between items-center mb-5 border-b border-[#2A2A2A] pb-5">
                 <span className="text-[#888] text-sm">Sábados</span>
                 <span className="text-white font-medium">09:00 – 18:00</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-[#888] text-sm">Domingos</span>
                 <span className="text-[#555] font-medium uppercase text-xs tracking-[0.2em] mt-1">Cerrado</span>
               </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario Limpio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl text-white mb-8" style={{ fontFamily: 'var(--fuente-decorativa)' }}>
              Envíanos un mensaje
            </h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm"
                  required
                />
              </div>
              
              <div className="relative group">
                <input 
                  type="tel" 
                  placeholder="Teléfono o Celular" 
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm"
                  required
                />
              </div>

              <div className="relative group">
                <textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  rows="5" 
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white p-4 rounded-sm focus:border-[#C0C0C0] outline-none transition-colors font-light text-sm resize-none"
                  required
                />
              </div>
              
              <Boton variante="metalico" clasesAdicionales="w-full mt-2 text-sm uppercase tracking-widest">
                Enviar Consulta
              </Boton>
            </form>
          </motion.div>
        </div>

        {/* Mapa Ancho (Placeholder elegante) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[400px] bg-[#111] rounded-[1rem] overflow-hidden border border-[#2A2A2A] relative flex items-center justify-center group"
        >
          {/* Imagen de fondo de mapa simulado */}
          <div 
            className="absolute inset-0 opacity-20 filter grayscale invert group-hover:opacity-30 transition-opacity duration-500"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/60" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-4xl mb-4">📍</span>
            <p className="text-white tracking-widest uppercase text-sm font-medium">Ubicación de DC Barber Studio</p>
            <p className="text-[#888] text-xs mt-2 font-light">Av. Principal 1234, Ciudad del Sol</p>
            {/* Este botón podrá abrir Google Maps en el futuro */}
            <button className="mt-6 border border-[#444] hover:border-[#C0C0C0] hover:text-white text-[#A0A0A0] px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-colors">
              Abrir en Maps
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
