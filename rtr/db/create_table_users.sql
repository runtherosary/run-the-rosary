create table users (
id SERIAL primary key
, first_name text
, last_name text
, email text
, password text
, created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
, updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
, is_paid boolean default false
);