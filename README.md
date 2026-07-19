# ✂ Barber Studio

Aplicación web para la gestión de una barbería moderna.

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | React + Vite + Tailwind CSS v4 + Motion |
| Backend | Node.js + Express |
| Base de datos | Supabase (PostgreSQL) |
| IA | Gemini API |
| Automatizaciones | n8n |
| Reportes | ExcelJS |

## Estructura del proyecto

```
barberia-app/
├── cliente/          → Frontend React
├── servidor/         → Backend Node.js + Express
├── base_datos/       → Documentación de la base de datos
├── documentacion/    → Documentación del proyecto
└── recursos/         → Recursos estáticos compartidos
```

## Cómo ejecutar en desarrollo

### Frontend
```bash
cd cliente
npm install
npm run dev
```
Disponible en: http://localhost:5173

### Backend
```bash
cd servidor
# Crea el archivo .env basándote en .env.example
cp .env.example .env
# Completa las credenciales de Supabase en .env
npm run dev
```
Disponible en: http://localhost:3000

## Variables de entorno

- Ver `servidor/.env.example` para las variables del backend
- Ver `cliente/.env.example` para las variables del frontend

⚠️ **Nunca subas archivos `.env` al repositorio**

## Módulos del proyecto

1. ✅ Estructura base
2. 🔒 Página web pública
3. 🔒 Reserva de citas
4. 🔒 Panel del administrador
5. 🔒 Agenda
6. 🔒 Clientes
7. 🔒 Servicios
8. 🔒 Dashboard
9. 🔒 Inteligencia Artificial
10. 🔒 Automatizaciones
11. 🔒 Reportes
