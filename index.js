const inquirer = require('inquirer');
const fs = require('fs');
const templates = require('./template')


//QUESTIONS USING INQUIRER PROMPT
//VALIDATE WILL ENSURE USER WILL INPUT SOMETHING
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'title',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
        
    },
    {
        type: 'input',
        message: 'What was your motivation behind this project?',
        name : 'motives',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: 'Why did you create this project?',
        name : 'why',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: 'What problems did you encounter while making this project?',
        name : 'problem',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
    },
    {
        type: 'input',
        message: 'What did you learn after creating this project?',
        name : 'learn',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
    },
    
    {
        type: 'input',
        message: 'What packages needed to be installed before running this project?',
        name:'installation',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'Credits',
        name : 'credits',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
    },

    {
        type: 'input',
        message: 'How can users contribute?',
        name:'contribute',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'What are the key features of your project?',
        name:'feature',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    }
    ,
    {
        type: 'list',
        message: 'LICENSE',
        name:'license',
        choices: ['MIT','Apache','BSD','MPL','GNU','N/A'],
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'How to run a test for your project?',
        name:'test',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'Enter your github username',
        name:'github',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'Enter your e-mail address',
        name:'email',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'Enter your LinkedIn username',
        name:'linkedin',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    }
])
.then((answers) => {
    // ANSWERS WILL GO STRAIGHT TO TEMPLATES FUNCTION
    // README.MD WILL BE CREATED, OVERWRITE IF ALREADY EXISTED
    fs.writeFile('README.md', templates(answers), err => {
        err ? console.log(err) : console.log('Success')
    })
})
