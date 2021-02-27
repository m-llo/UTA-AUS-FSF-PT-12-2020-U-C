const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your favorite language?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then((response) =>{
  const filename = `${response.username.toLowerCase().split(' ').join('_')}.json`;
  console.log(response.username.toLowerCase().split(' '));
  const data ={
      name: response.username,
      language: response.language,
      method: response.method,
  };
//  to update a JSON file fs.readFile(get old data, JSON.parse, check to see if it's an array, then push to the array
  fs.appendFile(filename, JSON.stringify(data), (err) =>
  
    err ? console.error(err) : console.log('Commit logged!')
  );
}
  )
