SELECT *
FROM prayers p
JOIN category_day cd
ON p.category_day_id = cd.id
JOIN prayer_mystery_category pmc
ON cd.id = pmc.id
WHERE pmc.category_name = $1;


-- passing in category like 'Joyful' and 'Sorrowful';