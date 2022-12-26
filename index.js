const inquirer = require('inquirer');
const fs = require('fs');


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
.then(({
    title,
    installation,
    contribution,
    instructions,
    license,
    github,
    linkedin,
    email
}) => {
    
    const template = `# ${title}
    
    * [Installation](#installation)

    * [Usage](#usage)

    * [Contribution](#contribution)

    * [Credits](#credits)

    * [License](#license)

    * Installation
    - ${installation}

    ##Contribution
    - ${contribution}

    ## instructions
    - ${instructions}

    ## License
    - ${license}

    # Contact
    * Github: ${github}
    * LinkedIn: ${linkedin}
    * E-mail: ${email}
    `

    createNewFile(title,template)
}
)

function createNewFile(filename,data) {
    fs.writeFile(`./${filename.toLowerCase().split(' ').join('')}.md`,data,(err)=> {
        err? console.log(err) : console.log('ReadME generated Successfully')
    })
}