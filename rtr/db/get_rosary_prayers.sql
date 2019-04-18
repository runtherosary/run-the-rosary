SELECT p.id, p.prayer_name, p.prayer_url
FROM prayers p
JOIN prayer_type t
ON p.prayer_type_id = t.id
WHERE t.prayer_type = 'Rosary';