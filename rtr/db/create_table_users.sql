CREATE TABLE users (
id SERIAL PRIMARY KEY
, first_name TEXT
, last_name TEXT
, email TEXT
, password TEXT
, created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
, updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
, is_paid BOOLEAN default false
);