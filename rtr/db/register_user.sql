INSERT INTO users (first_name, last_name, email, PASSWORD)
    VALUES ($1, $2, $3, $4)
  RETURNING
    *;
