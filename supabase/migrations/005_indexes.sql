-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 005_indexes.sql
-- Índices de rendimiento
-- ==========================================


-- ==========================================
-- CLIENTES
-- ==========================================

-- Buscar clientes dentro de una barbería
CREATE INDEX idx_clientes_barberia
ON clientes(barberia_id);


-- Buscar por celular (reservas rápidas)
CREATE INDEX idx_clientes_celular
ON clientes(celular);



-- ==========================================
-- EMPLEADOS
-- ==========================================

CREATE INDEX idx_empleados_barberia
ON empleados(barberia_id);


-- Empleados activos de una barbería
CREATE INDEX idx_empleados_activos
ON empleados(barberia_id, activo)
WHERE eliminado_en IS NULL;



-- ==========================================
-- HORARIOS
-- ==========================================

CREATE INDEX idx_horarios_empleado
ON horarios_empleados(empleado_id);


CREATE INDEX idx_horarios_dia
ON horarios_empleados(
    empleado_id,
    dia_semana
);



-- ==========================================
-- SERVICIOS
-- ==========================================

CREATE INDEX idx_servicios_barberia
ON servicios(barberia_id);


CREATE INDEX idx_servicios_activos
ON servicios(barberia_id, activo)
WHERE eliminado_en IS NULL;



-- ==========================================
-- CITAS
-- ==========================================


-- Agenda principal por barbería y fecha

CREATE INDEX idx_citas_barberia_fecha
ON citas(
    barberia_id,
    fecha_hora_inicio
);



-- Búsqueda de calendario por rango de fechas

CREATE INDEX idx_citas_fecha
ON citas(fecha_hora_inicio);



-- Agenda de un barbero específico

CREATE INDEX idx_citas_empleado
ON citas(empleado_id);



-- Historial de cliente

CREATE INDEX idx_citas_cliente
ON citas(cliente_id);



-- Filtros por estado

CREATE INDEX idx_citas_estado
ON citas(estado);



-- Control financiero

CREATE INDEX idx_citas_estado_pago
ON citas(estado_pago);



-- Código de reserva
-- (Aunque UNIQUE ya crea índice,
-- se deja documentado que existe)

-- codigo_reserva UNIQUE



-- ==========================================
-- DASHBOARD / REPORTES
-- ==========================================

-- Consultas tipo:
-- "citas completadas de una barbería"

CREATE INDEX idx_citas_reportes
ON citas(
    barberia_id,
    estado,
    fecha_hora_inicio
);



-- ==========================================
-- SOFT DELETE
-- ==========================================

CREATE INDEX idx_barberias_activas
ON barberias(id)
WHERE eliminado_en IS NULL;


CREATE INDEX idx_clientes_activos
ON clientes(barberia_id)
WHERE eliminado_en IS NULL;
