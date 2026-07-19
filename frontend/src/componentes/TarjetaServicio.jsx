import { motion } from 'motion/react'
import Boton from './Boton'

export default function TarjetaServicio({ icono, nombre, descripcion, duracion, precio }) {
  return (
    <div
      className="p-8 rounded-[1rem] flex flex-col h-full relative group transition-all duration-500 border border-[#2A2A2A] hover:border-[#888888]"
      style={{
        background: 'var(--color-fondo-carta)',
      }}
    >
      {/* Resplandor metálico superior en hover */}
      <div 
        className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[1rem]"
        style={{ background: 'var(--gradiente-metalico)' }}
      />

      {/* Ícono emoji / símbolo */}
      <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
        {icono}
      </div>

      {/* Nombre del servicio */}
      <h3 
        className="text-2xl text-white mb-3 font-medium tracking-wide"
        style={{ fontFamily: 'var(--fuente-decorativa)' }}
      >
        {nombre}
      </h3>

      {/* Descripción */}
      <p className="text-[#888888] text-sm mb-8 flex-grow leading-relaxed font-light transition-colors duration-500 group-hover:text-[#A0A0A0]">
        {descripcion}
      </p>

      {/* Footer de tarjeta (Detalles y Botón) */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#2A2A2A] group-hover:border-[#3A3A3A] transition-colors duration-500">
        <div className="flex flex-col">
          <span className="text-[#555555] text-xs uppercase tracking-widest mb-1 group-hover:text-[#888] transition-colors">
            {duracion}
          </span>
          <span className="font-medium text-xl text-white">
            ${precio}
          </span>
        </div>
        
        <Boton 
          variante="secundario" 
          to="/reservar"
          clasesAdicionales="text-xs px-5 py-2 !border-[#3A3A3A] !text-[#C0C0C0] hover:!bg-[#C0C0C0] hover:!text-[#0A0A0A] hover:!border-[#C0C0C0]"
        >
          Reservar
        </Boton>
      </div>
    </div>
  )
}
