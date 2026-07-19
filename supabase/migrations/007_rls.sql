-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 007_rls.sql
-- Seguridad Row Level Security
-- ==========================================



-- ==========================================
-- Activar RLS
-- ==========================================


ALTER TABLE barberias ENABLE ROW LEVEL SECURITY;

ALTER TABLE configuracion ENABLE ROW LEVEL SECURITY;

ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;

ALTER TABLE empleados ENABLE ROW LEVEL SECURITY;

ALTER TABLE horarios_empleados ENABLE ROW LEVEL SECURITY;

ALTER TABLE servicios ENABLE ROW LEVEL SECURITY;

ALTER TABLE citas ENABLE ROW LEVEL SECURITY;




-- ==========================================
-- LIMPIEZA DE POLÍTICAS
-- Permite re-ejecutar migraciones
-- ==========================================


DROP POLICY IF EXISTS 
"Lectura pública barberias"
ON barberias;


DROP POLICY IF EXISTS 
"Lectura pública configuracion"
ON configuracion;


DROP POLICY IF EXISTS 
"Lectura pública empleados"
ON empleados;


DROP POLICY IF EXISTS 
"Lectura pública horarios"
ON horarios_empleados;


DROP POLICY IF EXISTS 
"Lectura pública servicios"
ON servicios;


DROP POLICY IF EXISTS 
"Inserción pública clientes"
ON clientes;


DROP POLICY IF EXISTS 
"Inserción pública citas"
ON citas;





-- ==========================================
-- LECTURA PÚBLICA
-- Datos necesarios para la web
-- ==========================================



CREATE POLICY 
"Lectura pública barberias"

ON barberias

FOR SELECT

USING (
    eliminado_en IS NULL
);




CREATE POLICY 
"Lectura pública configuracion"

ON configuracion

FOR SELECT

USING (
    true
);




CREATE POLICY 
"Lectura pública empleados"

ON empleados

FOR SELECT

USING (

    activo = TRUE

    AND eliminado_en IS NULL

);




CREATE POLICY 
"Lectura pública horarios"

ON horarios_empleados

FOR SELECT

USING (

    activo = TRUE

);




CREATE POLICY 
"Lectura pública servicios"

ON servicios

FOR SELECT

USING (

    activo = TRUE

    AND eliminado_en IS NULL

);





-- ==========================================
-- INSERCIÓN DE RESERVAS MVP
-- ==========================================


-- Cliente puede crear registro inicial

CREATE POLICY

"Inserción pública clientes"

ON clientes

FOR INSERT

WITH CHECK (

    true

);




-- Cliente puede crear una cita
-- pero NO puede crear:
-- completadas
-- canceladas
-- pagadas
-- administrativas


CREATE POLICY

"Inserción pública citas"

ON citas

FOR INSERT

WITH CHECK (

    estado = 'pendiente'

    AND estado_pago = 'pendiente'

    AND canal_reserva = 'web'

);





-- ==========================================
-- PROTECCIÓN ADICIONAL
-- ==========================================


-- Nadie anónimo puede leer:
-- clientes
-- citas
-- pagos
-- historial


CREATE POLICY

"Sin lectura pública clientes"

ON clientes

FOR SELECT

USING (

    false

);



CREATE POLICY

"Sin lectura pública citas"

ON citas

FOR SELECT

USING (

    false

);



-- ==========================================
-- NOTA DE ARQUITECTURA PRODUCCIÓN
-- ==========================================

COMMENT ON TABLE citas IS

'En producción las operaciones administrativas deben pasar por Supabase Auth + Edge Functions.';



COMMENT ON TABLE clientes IS

'En producción el alta pública debe migrar a Edge Function para controlar spam y validar tenant.';
