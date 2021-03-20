const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'crownjewel07',
  database: 'playlistdb',
});

const afterConnection = () => {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

const queryHipHopSongs = () =>{
connection.query('Select * FROM songs WHERE genre=?', ['HipHop'], (err, res)=>{
    if (err) throw err;
    console.log(res);
    res.foreEach(({id, title, artist, genere})=>{
        console.log(title, artist)
    })

});

};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
  queryHipHopSongs
});