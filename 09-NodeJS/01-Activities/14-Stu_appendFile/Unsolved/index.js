// TODO: What are we importing?
const fs = require('fs');
// the file system node funciton from the node api


// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//  locating the file called log.txt if it doesn't exist it will create a log.txt file adding the process.argv in a new line(\n) index 2 and a space to the end of the file, and what to do if it's an error console log the errror if not console log commit logged

// TODO: Describe how this ternary operator works
// if then statement in shorthand for very simple logic
  err ? console.error(err) : console.log('Commit logged!')
);
