-- ==========================================
-- DC BARBER STUDIO
-- Supabase Database Setup
-- Archivo: 001_extensions.sql
-- ==========================================

-- Generación de UUID
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Necesaria para restricciones EXCLUDE con rangos de tiempo
CREATE EXTENSION IF NOT EXISTS btree_gist;
