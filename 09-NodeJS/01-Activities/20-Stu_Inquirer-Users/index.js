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
  const filename = `${response.username.toLowerCase().split(' ').join(' ')}.json`;
  fs.appendFile(filename, `${response.username}\n${response.language}\n${response.method}\n`, (err) =>
  
    err ? console.error(err) : console.log('Commit logged!')
  );
}
  )
