// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  -[Description](#description)<br/>
  -[Installation](#installation)<br/>
  -[Usage](#usage)<br/>
  -[License](#license)<br/>
  -[Contribution](#contribution)<br/>
  -[Testing](#testing)<br/>
  -[Questions](#questions)<br/>

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The license for this application is: 

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  You can find my repositories on GitHub: [https://github.com/${data.github}]
  If you have any questions feel free to email me at: ${data.email}
`};

module.exports = generateMarkdown;
