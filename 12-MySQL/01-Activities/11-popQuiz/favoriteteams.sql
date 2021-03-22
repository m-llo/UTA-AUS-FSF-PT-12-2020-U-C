DROP DATABASE IF EXISTS favorite_teamsdb;

CREATE DATABASE favorite_teamsdb;

USE favorite_teamsdb;

CREATE TABLE teams (
  id INT NOT NULL AUTO_INCREMENT,
  team VARCHAR(50) NULL,
  city VARCHAR (50) NULL,
  league VARCHAR (50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO teams (team, city, league)
VALUES ("Ravens", "Baltimore", "NFL");

INSERT INTO teams (team, city, league)
VALUES ("Lakers", "Los Angeles", "NBA");

INSERT INTO teams (team, city, league)
VALUES ("Rams", "Los Angeles", "NFL");