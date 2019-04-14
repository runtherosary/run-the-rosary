SELECT
  *
FROM
  prayers p
  JOIN prayer_type t ON p.prayer_type_id = t.id
WHERE
  t.prayer_type = $1;

-- pass in type, like 'Rosary' or'General'
