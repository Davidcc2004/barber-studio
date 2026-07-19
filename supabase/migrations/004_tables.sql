-- ==========================================
-- DC BARBER STUDIO
-- Archivo: 004_tables.sql
-- Creación de tablas principales
-- ==========================================


-- ==========================================
-- TABLA: barberias
-- Tenant principal SaaS
-- ==========================================

CREATE TABLE barberias (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    slug VARCHAR(100) NOT NULL UNIQUE,

    nombre VARCHAR(100) NOT NULL,

    nombre_empresa VARCHAR(150),

    nit VARCHAR(30),

    email VARCHAR(100),

    ciudad VARCHAR(50),

    telefono TEXT,

    tiempo_descanso_minutos INT DEFAULT 0
        CHECK (tiempo_descanso_minutos >= 0),

    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    eliminado_en TIMESTAMPTZ

);


COMMENT ON TABLE barberias IS
'Tenant principal del sistema SaaS. Cada barbería posee sus propios clientes, empleados, servicios y citas.';



-- ==========================================
-- TABLA: configuracion
-- Configuración visual y operativa
-- ==========================================

CREATE TABLE configuracion (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    barberia_id UUID NOT NULL UNIQUE
        REFERENCES barberias(id)
        ON DELETE CASCADE,


    whatsapp TEXT,

    direccion VARCHAR(255),

    instagram VARCHAR(100),

    facebook VARCHAR(100),


    horario_apertura TIME,

    horario_cierre TIME,


    logo_url VARCHAR(255),


    color_principal VARCHAR(7)
        DEFAULT '#000000',


    timezone VARCHAR(50)
        DEFAULT 'America/Bogota',


    moneda VARCHAR(10)
        DEFAULT 'COP',


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    CHECK (
        horario_apertura IS NULL
        OR horario_cierre IS NULL
        OR horario_apertura < horario_cierre
    ),


    CHECK (
        color_principal IS NULL
        OR color_principal ~ '^#[A-Fa-f0-9]{6}$'
    )

);



-- ==========================================
-- TABLA: clientes
-- ==========================================

CREATE TABLE clientes (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    barberia_id UUID NOT NULL
        REFERENCES barberias(id)
        ON DELETE CASCADE,


    nombre VARCHAR(100) NOT NULL,


    celular TEXT NOT NULL,


    email VARCHAR(100),


    fecha_nacimiento DATE,


    ultimo_servicio TIMESTAMPTZ,


    ultima_visita TIMESTAMPTZ,


    notas TEXT,


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    eliminado_en TIMESTAMPTZ,


    UNIQUE(barberia_id, celular)

);



COMMENT ON TABLE clientes IS
'Clientes registrados por barbería. El celular evita duplicados dentro del mismo tenant.';



-- ==========================================
-- TABLA: empleados
-- ==========================================

CREATE TABLE empleados (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    barberia_id UUID NOT NULL
        REFERENCES barberias(id)
        ON DELETE CASCADE,


    auth_user_id UUID UNIQUE
        REFERENCES auth.users(id)
        ON DELETE SET NULL,


    nombre VARCHAR(100) NOT NULL,


    cargo VARCHAR(50),


    color_agenda VARCHAR(7)
        DEFAULT '#FFFFFF',


    foto_url VARCHAR(255),


    activo BOOLEAN NOT NULL DEFAULT TRUE,


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    eliminado_en TIMESTAMPTZ,


    CHECK (
        color_agenda IS NULL
        OR color_agenda ~ '^#[A-Fa-f0-9]{6}$'
    )

);



COMMENT ON TABLE empleados IS
'Personal de la barbería: barberos, administradores y recepción.';



-- ==========================================
-- TABLA: horarios_empleados
-- Disponibilidad semanal
-- ==========================================

CREATE TABLE horarios_empleados (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    empleado_id UUID NOT NULL
        REFERENCES empleados(id)
        ON DELETE CASCADE,


    dia_semana INT NOT NULL
        CHECK (dia_semana BETWEEN 0 AND 6),


    hora_inicio TIME NOT NULL,


    hora_fin TIME NOT NULL,


    activo BOOLEAN NOT NULL DEFAULT TRUE,


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    CHECK(hora_inicio < hora_fin),


    UNIQUE(
        empleado_id,
        dia_semana,
        hora_inicio,
        hora_fin
    )

);



COMMENT ON TABLE horarios_empleados IS
'Horarios disponibles por empleado. 0 domingo - 6 sábado.';



-- ==========================================
-- TABLA: servicios
-- ==========================================

CREATE TABLE servicios (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    barberia_id UUID NOT NULL
        REFERENCES barberias(id)
        ON DELETE CASCADE,


    nombre VARCHAR(100) NOT NULL,


    descripcion TEXT,


    duracion_minutos INT NOT NULL
        CHECK(duracion_minutos > 0),


    precio NUMERIC(10,2) NOT NULL
        CHECK(precio >= 0),


    imagen_url VARCHAR(255),


    color VARCHAR(7),


    activo BOOLEAN NOT NULL DEFAULT TRUE,


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    eliminado_en TIMESTAMPTZ,


    CHECK(
        color IS NULL
        OR color ~ '^#[A-Fa-f0-9]{6}$'
    )

);



COMMENT ON TABLE servicios IS
'Catálogo de servicios ofrecidos por cada barbería.';



-- ==========================================
-- TABLA: citas
-- Tabla central del sistema
-- ==========================================

CREATE TABLE citas (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    barberia_id UUID NOT NULL
        REFERENCES barberias(id)
        ON DELETE CASCADE,


    cliente_id UUID NOT NULL
        REFERENCES clientes(id)
        ON DELETE CASCADE,


    empleado_id UUID NOT NULL
        REFERENCES empleados(id)
        ON DELETE RESTRICT,


    servicio_id UUID NOT NULL
        REFERENCES servicios(id)
        ON DELETE RESTRICT,


    codigo_reserva VARCHAR(20)
        UNIQUE,


    fecha_hora_inicio TIMESTAMPTZ NOT NULL,


    fecha_hora_fin TIMESTAMPTZ NOT NULL,


    duracion_minutos INT NOT NULL
        CHECK(duracion_minutos > 0),


    duracion_real_minutos INT
        CHECK(
            duracion_real_minutos IS NULL
            OR duracion_real_minutos > 0
        ),


    precio_final NUMERIC(10,2) NOT NULL
        CHECK(precio_final >= 0),


    monto_pagado NUMERIC(10,2) NOT NULL
        DEFAULT 0
        CHECK(monto_pagado >= 0),


    estado estado_cita NOT NULL
        DEFAULT 'pendiente',


    estado_pago estado_pago NOT NULL
        DEFAULT 'pendiente',


    canal_reserva canal_reserva NOT NULL
        DEFAULT 'web',


    origen_reserva origen_reserva,


    cancelada_por cancelada_por,


    observaciones TEXT,


    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),


    eliminado_en TIMESTAMPTZ,


    CHECK(
        fecha_hora_inicio < fecha_hora_fin
    ),


    CHECK(
        monto_pagado <= precio_final
    ),


    CHECK(
        estado <> 'cancelada'
        OR cancelada_por IS NOT NULL
    ),


    CONSTRAINT sin_citas_solapadas

    EXCLUDE USING gist (

        empleado_id WITH =,


        tstzrange(
            fecha_hora_inicio,
            fecha_hora_fin
        )
        WITH &&

    )

    WHERE (
        estado IN ('pendiente','confirmada')
        AND eliminado_en IS NULL
    )

);



COMMENT ON TABLE citas IS
'Tabla transaccional principal. Controla agenda, pagos, clientes y servicios.';
