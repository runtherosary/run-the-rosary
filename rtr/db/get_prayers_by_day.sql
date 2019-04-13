SELECT
  p.id,
  p.prayer_name,
  p.prayer_type_id,
  p.prayer_url,
  pmc.category_name,
  d.day
FROM
  prayers p
  JOIN category_day cd ON p.category_day_id = cd.id
  JOIN prayer_mystery_category pmc ON cd.category_id = pmc.id
  JOIN prayer_day d ON d.id = cd.day_id
WHERE
  d.day = $1
  AND p.category_day_id IS NOT NULL;

-- Passing in day like 'Monday'
