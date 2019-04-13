create table prayer_mystery_category (
id serial primary key
, category_name text
, prayer_day_id int references prayer_day (id)
);