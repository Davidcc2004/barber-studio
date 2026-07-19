-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 006_triggers.sql
-- Triggers automáticos
-- ==========================================



-- ==========================================
-- TRIGGER actualizado_en
-- ==========================================

DROP TRIGGER IF EXISTS tr_barberias_actualizado_en
ON barberias;

CREATE TRIGGER tr_barberias_actualizado_en

BEFORE UPDATE ON barberias

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_configuracion_actualizado_en
ON configuracion;

CREATE TRIGGER tr_configuracion_actualizado_en

BEFORE UPDATE ON configuracion

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_clientes_actualizado_en
ON clientes;

CREATE TRIGGER tr_clientes_actualizado_en

BEFORE UPDATE ON clientes

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_empleados_actualizado_en
ON empleados;

CREATE TRIGGER tr_empleados_actualizado_en

BEFORE UPDATE ON empleados

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_horarios_actualizado_en
ON horarios_empleados;

CREATE TRIGGER tr_horarios_actualizado_en

BEFORE UPDATE ON horarios_empleados

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_servicios_actualizado_en
ON servicios;

CREATE TRIGGER tr_servicios_actualizado_en

BEFORE UPDATE ON servicios

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();



DROP TRIGGER IF EXISTS tr_citas_actualizado_en
ON citas;

CREATE TRIGGER tr_citas_actualizado_en

BEFORE UPDATE ON citas

FOR EACH ROW

EXECUTE FUNCTION update_actualizado_en_column();




-- ==========================================
-- Código automático de reserva
-- Ejemplo:
-- DCB-000001
-- ==========================================


DROP TRIGGER IF EXISTS tr_citas_generar_codigo
ON citas;


CREATE TRIGGER tr_citas_generar_codigo

BEFORE INSERT ON citas

FOR EACH ROW

WHEN (NEW.codigo_reserva IS NULL)

EXECUTE FUNCTION generar_codigo_reserva();




-- ==========================================
-- Validación cancelaciones
-- ==========================================


DROP TRIGGER IF EXISTS tr_validar_cancelacion
ON citas;


CREATE TRIGGER tr_validar_cancelacion

BEFORE INSERT OR UPDATE ON citas

FOR EACH ROW

EXECUTE FUNCTION validar_cancelacion();
