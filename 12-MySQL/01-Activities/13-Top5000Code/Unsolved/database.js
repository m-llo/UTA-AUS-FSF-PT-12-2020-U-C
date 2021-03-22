const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'crownjewel07',
  database: 'top_songsdb',
});

// Show all songs

const welcome = () =>{
    inquirer
    .prompt({
      name: 'allorelse',
      type: 'list',
    //   message: 'What would you like to do?',ask for options from reame then do a function for each
      choices: ['ALL', 'SEARCH', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.allorelse === 'ALL') {
        all5000();
      } else if (answer.allorelse === 'SEARCH') {
        search5000();
      } else {
        connection.end();
      }
    });
}

const all5000 = () =>{
    connection.query('SELECT * FROM top5000', (err, results) => {
        if (err) throw err
    console.log(results)
        connection.end
    });
    welcome()
};


const search5000 =()=>{
    inquirer
    .prompt({
      name: 'searchtype',
      type: 'list',
      message: 'Would you like to search by [artist], [song], or [range]?',
      choices: ['Artist', 'Song', 'Range', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.searchtype === 'Artist') {
        artistSearch();
      } else if (answer.searchtype === 'Song') {
        songSearch();
      }else if (answer.searchtype === 'Range') {
        rangeSearch();
      }else {
        connection.end();
      }
    });
}

const artistSearch = ()=>{
    inquirer
    .prompt({
      name: 'artistsearchtype',
      type: 'list',
      message: 'Would you like to search for all songs [by artist] or all artists with [multiple appearances] on the top 5000?',
      choices: ['By Artist', 'Multiple Appearances', 'EXIT'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.artistsearchtype === 'By Artist') {
        searchByArtist();
      } else if (answer.artistsearchtype === 'Multiple Appearances') {
        multipleAppearances();
      }else {
        connection.end();
      }
    });
}
const searchByArtist = ()=>{
   
    inquirer
    .prompt({
      name: 'searchByArtist',
      type: 'input',
      message: 'Enter the name of the artist you would like to search for',
    })
    .then((answer) => {
      let artist = answer.name;
      const query = "`SELECT position, song, year, FROM top5000 WHERE ?"
      connection.query(query, [artist], (err, result) => {
        if (err) throw err;
        result.forEach(({ position, artist, song, year}) => {
            console.log(`${position} | ${artist} | ${song} | ${year}`);
          });
     });
     welcome();
    })
}
    
    //For multiple - result  is GROUP BY artist HAVING count(*)>1
    // by range WHER position Between ? and ?












connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    welcome();
  });