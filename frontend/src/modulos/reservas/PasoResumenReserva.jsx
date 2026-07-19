import ResumenReserva from '@/componentes/ResumenReserva'
import Boton from '@/componentes/Boton'

export default function PasoResumenReserva({ reserva, alConfirmar }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 
          className="text-3xl sm:text-4xl text-white mb-3"
          style={{ fontFamily: 'var(--fuente-decorativa)' }}
        >
          Confirma tu <span className="texto-metalico font-normal">reserva</span>
        </h2>
        <p className="text-[#888] text-sm font-light">Revisa que todos los datos sean correctos.</p>
      </div>

      <ResumenReserva reserva={reserva} />

      <div className="mt-10 flex justify-center">
        <Boton 
          variante="metalico" 
          onClick={alConfirmar}
          clasesAdicionales="w-full max-w-md py-4 text-sm tracking-widest uppercase"
        >
          Confirmar Reserva
        </Boton>
      </div>
    </div>
  )
}
