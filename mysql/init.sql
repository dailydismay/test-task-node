CREATE DATABASE IF NOT EXISTS books;

USE books;

CREATE TABLE  authors(
  id  INT NOT NULL AUTO_INCREMENT,
  fullname  VARCHAR(64),
  PRIMARY KEY(id)
);

CREATE TABLE  images(
  id INT NOT NULL AUTO_INCREMENT,
  source VARCHAR(128) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS books(
  id  INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) NOT NULL,
  description VARCHAR(512) NOT NULL,
  date  TIMESTAMP NOT NULL,
  author  INT NOT NULL,
  image INT NOT NULL,
  FOREIGN KEY(author) REFERENCES authors(id),
  FOREIGN KEY(image) REFERENCES images(id),
  PRIMARY KEY(id)
);


CREATE INDEX date on books(date);
CREATE INDEX title on books(title);
