const inquirer = require("inquirer")


 
inquirer.registerPrompt('list-input', require('./index'));
inquirer.prompt([{
  type: 'list-input',
  name: 'from',
  message: 'Select a state to travel from',
  choices: ['AL', 'AR']
}], function(answers) {
  console.log(JSON.stringify(answers, null, 2));
});