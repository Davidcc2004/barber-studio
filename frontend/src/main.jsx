// Punto de entrada principal de la aplicación React — Barber Studio
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/estilos/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
