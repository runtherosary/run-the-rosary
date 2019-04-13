CREATE TABLE prayers (
id SERIAL PRIMARY KEY
, prayer_name TEXT
, prayer_type_id INT REFERENCES prayer_type (id)
, prayer_mystery_category_id INT REFERENCES prayer_mystery_category (id)
, prayer_day_id INT REFERENCES prayer_day (id)
, prayer_url TEXT
);
