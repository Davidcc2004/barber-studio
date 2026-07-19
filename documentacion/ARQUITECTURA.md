# Arquitectura — Barber Studio

## Visión general

```
Cliente (Navegador)
       ↓
Frontend (React + Vite)        → puerto 5173 en desarrollo
       ↓
Backend (Node.js + Express)    → puerto 3000 en desarrollo
       ↓
Supabase (PostgreSQL)          → cloud
       ↓
Servicios externos:
  - Gemini API  (Módulo 9)
  - n8n         (Módulo 10)
  - ExcelJS     (Módulo 11)
```

## Frontend — Arquitectura feature-based

```
cliente/src/
├── modulos/              ← Cada módulo contiene sus propios componentes, hooks y servicios
│   ├── inicio/           ← (PaginaInicio, SeccionHero, SeccionServicios, SeccionGaleria...)
│   ├── reservas/
│   ├── administrador/
│   ├── agenda/
│   ├── clientes/
│   ├── servicios/
│   ├── dashboard/
│   ├── reportes/
│   └── ia/
├── componentes/          ← Componentes globales reutilizables entre módulos
│   ├── Boton.jsx         ← UI Genérica
│   ├── ModalGaleria.jsx  ← UI Genérica
│   ├── TarjetaServicio.jsx ← Usado en landing y posiblemente panel admin
│   ├── BarraNavegacion.jsx
│   └── PiePagina.jsx
├── contextos/            ← Estado global con React Context
├── hooks/                ← Custom hooks reutilizables entre módulos
├── servicios/            ← Llamadas HTTP al backend (reutilizables entre módulos)
├── rutas/                ← Sistema de navegación (React Router)
├── animaciones/          ← Animaciones globales (Motion)
├── estilos/              ← CSS global y variables de diseño
└── utilidades/           ← Funciones helper puras
```

## Backend — Arquitectura por capas

```
servidor/src/
├── configuracion/        ← Inicialización de servicios (Supabase, variables de entorno)
├── rutas/                ← Definición de endpoints HTTP
├── controladores/        ← Lógica de cada endpoint (recibe req, devuelve res)
├── repositorios/         ← Acceso a la base de datos (consultas Supabase)
├── servicios/            ← Lógica de negocio compleja (Gemini, Excel, etc.)
├── middleware/           ← Funciones intermedias (auth, errores, validaciones)
└── utilidades/           ← Funciones helper puras del backend
```

## Flujo de una petición

```
Frontend (servicios/) → Backend (rutas/) → controladores/ → repositorios/ → Supabase
                                                           → servicios/   → Gemini / n8n
```

## Base de Datos (Supabase / PostgreSQL)

Arquitectura SaaS multi-tenant orientada a escalabilidad:
- **barberias**: Tenant principal del sistema SaaS.
- **configuracion**: Ajustes visuales, redes sociales y horarios por barbería (1:1).
- **clientes**: Directorio de clientes con `UNIQUE(barberia_id, celular)`.
- **empleados**: Staff de la barbería referenciado a `auth.users`.
- **horarios_empleados**: Disponibilidad semanal (0=Domingo - 6=Sábado).
- **servicios**: Catálogo de cortes/servicios.
- **citas**: Tabla transaccional central con protección contra solapamiento usando `EXCLUDE USING gist`.

*Se usan migraciones locales estructuradas (extensiones, enums, funciones, tablas, índices, triggers, rls).*

## Seguridad

- Las claves de Supabase solo viven en el backend
- El frontend solo conoce la URL del backend
- Las variables sensibles solo van en archivos .env (nunca en el repositorio)
- CORS configurado para aceptar solo el origen del frontend
