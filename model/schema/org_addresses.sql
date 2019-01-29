CREATE TABLE org_addresses (
  org_id int NOT NULL,
  street VARCHAR(30) NOT NULL,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL,
  PRIMARY KEY (org_id),
  CONSTRAINT fk_org_id FOREIGN KEY (org_id) REFERENCES orgs (org_id) ON DELETE CASCADE
);
