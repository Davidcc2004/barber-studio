# Decisiones Técnicas — Barber Studio

Este documento registra las decisiones técnicas importantes tomadas durante el desarrollo,
junto con la justificación de cada una.

---

## DT-001 — Tailwind CSS v4 con plugin de Vite

**Decisión:** Usar Tailwind CSS v4 con `@tailwindcss/vite` en lugar de v3.

**Justificación:**
- v4 es más rápido (usa Lightning CSS internamente)
- Integración directa con Vite sin configuración adicional
- No requiere `tailwind.config.js` para configuración básica
- Compatible con CSS nativo y variables CSS

**Impacto:** Sin `tailwind.config.js`. La importación se hace con `@import "tailwindcss"` en el CSS global.

---

## DT-002 — Arquitectura feature-based en el frontend

**Decisión:** Organizar el frontend por módulos de negocio en lugar de por tipo de archivo.

**Justificación:**
- Escala mejor cuando el proyecto crece
- Cada módulo es independiente y contiene todo lo que necesita
- Facilita el trabajo por módulos sin afectar otras partes

**Impacto:** `src/modulos/` contiene carpetas por funcionalidad.

---

## DT-003 — Service Role Key solo en el backend

**Decisión:** La `SUPABASE_SERVICE_ROLE_KEY` se usa únicamente en el backend.

**Justificación:**
- La service_role key tiene acceso completo a la base de datos sin restricciones de RLS
- Exponer esta clave en el frontend sería una vulnerabilidad crítica de seguridad
- El frontend solo se comunica con el backend propio

**Impacto:** El frontend no tiene ninguna conexión directa con Supabase.

---

## DT-004 — ES Modules en el backend

**Decisión:** Usar `"type": "module"` en el servidor para utilizar `import/export` en lugar de `require/module.exports`.

**Justificación:**
- Consistencia con el frontend (React usa ES Modules)
- Sintaxis moderna y estándar
- Node.js v24 tiene soporte nativo completo para ES Modules

**Impacto:** Todos los imports del servidor usan `import` en lugar de `require`.

---

## DT-005 — node --watch para desarrollo del backend

**Decisión:** Usar `node --watch` en lugar de `nodemon`.

**Justificación:**
- `node --watch` está incluido en Node.js desde v18.11
- No requiere instalar dependencias adicionales
- Funcionalidad equivalente a nodemon para desarrollo

**Impacto:** Se eliminó `nodemon` de las dependencias de desarrollo.

---

## DT-006 — Nombres en español

**Decisión:** Todos los archivos, carpetas, funciones y variables en español.

**Justificación:**
- Consistencia con el dominio de negocio
- El cliente y el equipo hablan español
- Facilita la lectura del código para el equipo

**Excepciones:** Nombres requeridos por convención de librerías:
- Nombres de archivos de configuración: `vite.config.js`, `.prettierrc`, etc.
- Props de React que requieren nombres específicos en inglés
- Nombres de métodos de librerías externas

---

## DT-007 — Identidad visual DC Barber Studio

**Decisión:** Paleta basada en negro profundo (#0A0A0A), plata metálica (#C0C0C0) y blanco (#FFFFFF). El efecto metálico con gradiente se reserva únicamente para elementos de alta jerarquía (logo DC, botones CTA).

**Tipografías definidas:**
- `Bebas Neue` → Logo "DC" (fuerza, carácter de barbería)
- `Cormorant Garamond` → Alternativa serif elegante para títulos premium
- `Inter` → Cuerpo de texto y UI general
- `Playfair Display` → Títulos decorativos de sección

**Justificación:**
- La plata metálica transmite lujo sin el exceso del dorado
- Negro profundo (#0A0A0A) es más sofisticado que el negro puro (#000000)
- El gradiente metálico solo en elementos destacados evita sobrecarga visual
- Bebas Neue da personalidad masculina y de barbería de alto nivel

**Impacto:** Variables CSS en `global.css`, clases `.logo-dc`, `.logo-subtitulo`, `.texto-metalico`, `.brillo-metalico-hover` disponibles en todo el proyecto.

---

## DT-008 — Diseño de Base de Datos SaaS (Supabase)

**Decisión:** Diseñar una base de datos PostgreSQL lista para SaaS desde el día 1, separada en migraciones lógicas (`001_extensions`, `002_enums`, etc.), utilizando características nativas de PostgreSQL para garantizar la integridad de datos.

**Justificación:**
- **SaaS-Ready:** Uso de `barberia_id` en todas las entidades (Multi-tenant).
- **Integridad:** Validaciones físicas mediante `CHECK`, tipos `ENUM` y secuencias (`nextval()`) garantizan la consistencia independientemente de fallos en el frontend.
- **Prevención de Solapamiento:** Uso de `CONSTRAINT EXCLUDE USING gist` sobre un `tstzrange` en la tabla `citas` para evitar citas cruzadas del mismo empleado a nivel de base de datos.
- **Modularidad:** Separar el esquema en 7 archivos facilita mantenimiento, pruebas y re-ejecución sin fricción (idempotencia en ENUMs y triggers).

**Impacto:** Arquitectura robusta que escala fácilmente a múltiples barberías (tenants) sin refactorizar el esquema.
