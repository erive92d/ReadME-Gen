const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkDown')


inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'title',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}
        
    },
    {
        type: 'input',
        message: 'How to install your app>',
        name:'installation',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'Contribution?',
        name:'contribution',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'input',
        message: 'How to use your app?',
        name:'instructions',
        validate: (value) => {if (value){ return true} else { return 'I need a value to continue'}}

    },
    {
        type: 'list',
        message: 'LICENSE',
        name:'license',
        choices: ['MIT','GPL','APACHE','GNU','N/A'],
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
    fs.writeFile('README.md', markdown(answers), err => {
        err ? console.log(err) : console.log('Success')
    })
})
