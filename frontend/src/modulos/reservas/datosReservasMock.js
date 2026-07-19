// =============================================================
// Datos mock para el sistema de reservas
// Estos datos serán reemplazados por consultas a Supabase en el Paso 3
// =============================================================

export const serviciosMock = [
  {
    id: 1,
    icono: '✂️',
    nombre: 'Corte Clásico',
    descripcion: 'Corte tradicional a tijera o máquina con lavado y peinado.',
    precio: 25,
    duracion: 45,
    color: '#C0C0C0',
    categoria: 'corte',
  },
  {
    id: 2,
    icono: '🔥',
    nombre: 'Fade Premium',
    descripcion: 'Degradado perfecto con acabado pulido al milímetro.',
    precio: 30,
    duracion: 60,
    color: '#E8E8E8',
    categoria: 'corte',
  },
  {
    id: 3,
    icono: '🧔',
    nombre: 'Barba & Perfilado',
    descripcion: 'Diseño de barba con toalla caliente y perfilado a navaja.',
    precio: 20,
    duracion: 30,
    color: '#888888',
    categoria: 'barba',
  },
  {
    id: 4,
    icono: '👑',
    nombre: 'Experiencia DC',
    descripcion: 'Corte premium, barba, mascarilla facial y masaje craneal.',
    precio: 55,
    duracion: 90,
    color: '#F5F5F5',
    categoria: 'premium',
  },
]

export const barberosMock = [
  {
    id: 1,
    nombre: 'David C',
    cargo: 'Fundador & Master Barber',
    especialidad: 'Fades, cortes clásicos y asesoría de imagen.',
    experiencia: '8 años',
    foto: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    nombre: 'Andrés M',
    cargo: 'Senior Barber',
    especialidad: 'Barbas, toalla caliente y texturizados.',
    experiencia: '5 años',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    nombre: 'Javier R',
    cargo: 'Estilista & Barber',
    especialidad: 'Diseño de líneas, mullet y estilos vanguardistas.',
    experiencia: '6 años',
    foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
]

// Horarios base del negocio (L-V: 09:00-20:00, S: 09:00-18:00)
export const horariosMock = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30',
]

// Horarios ocupados mock (simulan citas ya tomadas)
export const horariosOcupadosMock = ['10:00', '14:30', '16:00']

// Días de la semana en español
export const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

// Meses en español
export const mesesEspanol = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]
