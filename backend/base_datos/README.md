# Base de datos — Barber Studio

La base de datos de Barber Studio está administrada completamente desde **Supabase**.

## Gestión

Toda la creación y modificación de tablas se realiza desde:
- **Supabase Dashboard** → Table Editor
- **Supabase SQL Editor** → Para consultas y scripts

## Tablas del proyecto

| Tabla | Descripción | Módulo |
|-------|-------------|--------|
| `administradores` | Usuarios con acceso al panel | Módulo 4 |
| `clientes` | Clientes de la barbería | Módulo 6 |
| `servicios` | Servicios ofrecidos | Módulo 7 |
| `citas` | Reservas de los clientes | Módulo 3 |

## Scripts SQL

Los scripts SQL se agregarán en esta carpeta cuando lleguemos al módulo correspondiente.
Cada tabla tendrá su propio archivo `.sql` documentado.

## Convención de nombres en la base de datos

- Nombres de tablas en **español** y en **plural**
- Nombres de columnas en **español** y en **snake_case**
- Ejemplo: `fecha_creacion`, `numero_telefono`, `estado_cita`
