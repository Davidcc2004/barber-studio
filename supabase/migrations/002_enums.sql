-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 002_enums.sql
-- Enumeraciones del sistema
-- ==========================================


DO $$ 
BEGIN

CREATE TYPE estado_cita AS ENUM (
    'pendiente',
    'confirmada',
    'completada',
    'cancelada',
    'no_show'
);

EXCEPTION WHEN duplicate_object THEN NULL;

END $$;



DO $$ 
BEGIN

CREATE TYPE estado_pago AS ENUM (
    'pendiente',
    'pagado',
    'parcial'
);

EXCEPTION WHEN duplicate_object THEN NULL;

END $$;



DO $$ 
BEGIN

CREATE TYPE canal_reserva AS ENUM (
    'web',
    'whatsapp',
    'ia',
    'administrador'
);

EXCEPTION WHEN duplicate_object THEN NULL;

END $$;



DO $$ 
BEGIN

CREATE TYPE origen_reserva AS ENUM (
    'web',
    'whatsapp',
    'ia',
    'admin',
    'instagram',
    'facebook',
    'google'
);

EXCEPTION WHEN duplicate_object THEN NULL;

END $$;



DO $$ 
BEGIN

CREATE TYPE cancelada_por AS ENUM (
    'cliente',
    'admin',
    'barbero',
    'sistema'
);

EXCEPTION WHEN duplicate_object THEN NULL;

END $$;
