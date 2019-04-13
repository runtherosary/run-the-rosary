create table prayers (
id serial primary key
, prayer_name text
, prayer_type_id int references prayer_type (id)
, prayer_mystery_category_id int references prayer_mystery_category (id)
, prayer_url text
);