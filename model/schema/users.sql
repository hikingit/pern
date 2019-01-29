DROP TABLE IF EXISTS  users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  org_id int NOT NULL,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  FOREIGN KEY (org_id) REFERENCES orgs(org_id)
);
