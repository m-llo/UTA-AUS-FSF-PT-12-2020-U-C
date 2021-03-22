DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  PRIMARY KEY (position)
);

CREATE TABLE topAlbums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;
SELECT * FROM topAlbums;


SELECT top5000.position,  top5000.artist,  top5000.song,  top5000.year, topAlbums.album, topAlbums.year
FROM top5000 INNER JOIN topAlbums 
ON top5000.artist = topAlbums.artist AND topAlbums.year = top5000.year


-- -- show ALL books, even if we don't know the author
-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;


