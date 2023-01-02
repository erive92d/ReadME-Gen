function licenseBadge(license) {
    //['MIT','Apache','BSD','MPL','GNU','N/A'],
    if(license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if(license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if(license === 'BSD') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    if(license === 'MPL') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if(license === 'GNU') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if(license === 'N/A') {
        return 'Non-license'
    }
    
}



function templating(data) {
    return `
# ${data.title}

## Description

- What was your motivation?
${data.motives}

- Why did you build this project?
${data.why}

- What problem does it solve?
${data.problem}

- What did you learn?
${data.learn}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Testing](#test)
- [Contacts](#contacts)


## Installation
Package(s) needed in order for this project to run:
${data.installation}

## Usage
To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.

![alt text](assets/images/screenshot.png)



## Credits
I give credits to:
${data.credits}

## License
${licenseBadge(data.license)}

## Features
The key features of this project:
${data.feature}

## How to Contribute
${data.contribute} 
or
The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.


## Test
To run a test of this project:
${data.test}

## Contacts
If you have any questions, feel free to email me at, ${data.email}.
Enjoyed this project? here more at ${data.github}.
Are you looking for someone to employ? here's my LinkedIn ${data.linkedin}.
   

`
}

module.exports = templating