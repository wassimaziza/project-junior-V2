DROP DATABASE IF EXISTS autos;

CREATE DATABASE autos;

USE autos;

CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  year integer NOT NULL,
  company varchar(50) NOT NULL,
  status varchar(50) NOT NULL,
  image varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/