DROP DATABASE IF EXISTS top_songsdb;

CREATE DATABASE top_songsdb;

USE top_songsdb;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(50) NULL,
  song VARCHAR (50) NULL,
  year INT (50) NULL,
  raw_total DECIMAL (10, 4) NULL,
  raw_usa DECIMAL (10, 4) NULL,
  raw_uk DECIMAL (10, 4) NULL,
  raw_row DECIMAL (10, 4) NULL,
  PRIMARY KEY (position)
);

INSERT INTO teams (team, city, league)
VALUES ("Ravens", "Baltimore", "NFL");

INSERT INTO teams (team, city, league)
VALUES ("Lakers", "Los Angeles", "NBA");

INSERT INTO teams (team, city, league)
VALUES ("Rams", "Los Angeles", "NFL");