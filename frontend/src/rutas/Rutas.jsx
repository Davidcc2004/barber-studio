// Sistema de rutas de Barber Studio
// Define todas las rutas públicas y privadas de la aplicación.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicio from '../modulos/inicio/PaginaInicio'
import PaginaReservar from '../modulos/reservas/PaginaReservar'

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---- Rutas públicas (Módulo 2) ---- */}
        <Route path="/" element={<PaginaInicio />} />
        {/* <Route path="/servicios" element={<PaginaServicios />} /> */}
        {/* <Route path="/galeria" element={<PaginaGaleria />} /> */}
        {/* <Route path="/contacto" element={<PaginaContacto />} /> */}

        {/* ---- Reservas (Módulo 3) ---- */}
        <Route path="/reservar" element={<PaginaReservar />} />

        {/* ---- Panel administrador (Módulo 4+) ---- */}
        {/* <Route path="/admin" element={<PanelAdministrador />} /> */}
        {/* <Route path="/admin/agenda" element={<PaginaAgenda />} /> */}
        {/* <Route path="/admin/clientes" element={<PaginaClientes />} /> */}
        {/* <Route path="/admin/servicios" element={<PaginaServicios />} /> */}
        {/* <Route path="/admin/dashboard" element={<PaginaDashboard />} /> */}
        {/* <Route path="/admin/reportes" element={<PaginaReportes />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
