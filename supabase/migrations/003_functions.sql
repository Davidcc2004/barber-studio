-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 003_functions.sql
-- Funciones y lógica automática
-- ==========================================


-- ==========================================
-- Secuencia para códigos de reserva
-- ==========================================

CREATE SEQUENCE IF NOT EXISTS citas_codigo_seq
START 1;



-- ==========================================
-- Actualización automática timestamps
-- ==========================================

CREATE OR REPLACE FUNCTION update_actualizado_en_column()

RETURNS TRIGGER AS $$

BEGIN

    NEW.actualizado_en = NOW();

    RETURN NEW;

END;

$$ LANGUAGE plpgsql;



-- ==========================================
-- Generador código reserva
-- Ejemplo:
-- DCB-000001
-- ==========================================


CREATE OR REPLACE FUNCTION generar_codigo_reserva()

RETURNS TRIGGER AS $$

DECLARE

    numero INT;

BEGIN


    numero := nextval('citas_codigo_seq');


    NEW.codigo_reserva :=
        'DCB-' ||
        LPAD(numero::TEXT,6,'0');


    RETURN NEW;


END;

$$ LANGUAGE plpgsql;



-- ==========================================
-- Validación cancelaciones
-- ==========================================


CREATE OR REPLACE FUNCTION validar_cancelacion()

RETURNS TRIGGER AS $$

BEGIN


IF NEW.estado = 'cancelada'
AND NEW.cancelada_por IS NULL

THEN

RAISE EXCEPTION 
'Una cita cancelada debe indicar quien la canceló';


END IF;



RETURN NEW;


END;

$$ LANGUAGE plpgsql;
