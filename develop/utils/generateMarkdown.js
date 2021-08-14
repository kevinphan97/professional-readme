// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/License-${data.license}-blue)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The license for this application is: ![badge](https://img.shields.io/badge/License-${data.license}-blue)

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  You can find my repositories on GitHub: [https://github.com/${data.github}]
  If you have any questions feel free to email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
