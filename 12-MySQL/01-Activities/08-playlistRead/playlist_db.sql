DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Flashing Lights", "Kanye West", "Hip Hop");

INSERT INTO songs (title, artist, genre)
VALUES ("Sunday Morning", "Maroon 5", "Alternative");

INSERT INTO songs (title, artist, genre)
VALUES ("5 Steps","Dru Hill","R&B");