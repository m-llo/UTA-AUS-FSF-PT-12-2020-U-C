const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'crownjewel07',
  database: 'favorite_teamsdb',
});

const showTeams = () => {
    connection.query('SELECT * FROM teams', (err, res) => {
        if (err) throw err;
        res.forEach(({ id, team, city, league }) => {
          console.log(`${id} | ${team} | ${city} | ${league}`);
        });
        console.log('-----------------------------------');
      });
  };

const newTeam = () => {
    console.log('Inserting a new team...\n');

    const query = connection.query(
        'INSERT INTO teams SET ?',
        {
          team: 'Cowboys',
          city: 'Dallas',
          league: 'NFL',
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} teams inserted!\n`);

        }
      );
    
      // logs the actual query being run
      console.log(query.sql);

}
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  newTeam();
  showTeams();
  connection.end;
  
});