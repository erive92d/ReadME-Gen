function generateMarkDown(data) {
  return `
    # ${data.title}

    # Table of Content
    >   * [Installation](#installation)
    >   * [Instructions] (#instructions)
    >   * [Contributing](#contribution))
    >   * [License](#license)
    >   * [Contacts](#contacts)








    ##Installation
    ${data.installation}

    ##Instruction
    ${data.instructions}

    ##Contribution
    ${data.contribution}

    ##License
    ${data.license}

    ##Contacts
        GitHub: ${data.github}
        E-mail: ${data.email}
        LinkedIn: ${data.linkedin}

    
    `;
}

module.exports = generateMarkDown;
