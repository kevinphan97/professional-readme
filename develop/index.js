// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "checkbox",
        name: "license",
        message: "Please choose your license.",
        choices: ["MIT", "Apache", "GNU GPL v3", "None"],
        validate: licensingChoice => {
            if(licensingChoice){
                return true;
            }
            else {
                console.log("Please choose a licensing option!");
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project.",
        validate: titleName => {
            if(titleName) {
                return true;
            }
            else {
                console.log("Please enter a valid name for your project!");
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description about your project.",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            }
            else {
                console.log("Please enter a valid description for your project!");
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation infornation needed to use the application.",
        validate: installationInput => {
            if(installationInput) {
                return true;
            }
            else {
                console.log("Please provide installation information for the user!");
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain how the application works for the user.",
        validate: usageInfo => {
            if(usageInfo) {
                return true;
            }
            else {
                console.log("Please provide usage information for the user!");
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please explain how to contribute to the project.",
        validate: contributionInfo => {
            if(contributionInfo) {
                return true;
            }
            else {
                console.log("Please provide some contribution information!");
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide some test instructions for the application.",
        validate: testInfo => {
            if(testInfo) {
                return true;
            }
            else {
                console.log("Please provide any testing information!");
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: gitUser => {
            if(gitUser) {
                return true;
            }
            else {
                console.log("Please provide a GitHub username!");
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInfo => {
            if(emailInfo) {
                return true;
            }
            else {
                console.log("Please provide an email address!");
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("The ReadMe has been created!");
    })
    // .then((data) => {
    //     if (data.license === "Apache") {
    //         data.licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    //     }
    //     else if (data.license === "GNU GPL v3") {
    //         data.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    //     }
    //     else if (data.license === "MIT") {
    //         data.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    //     }
    //     else {
    //         return "";
    //     };
    //     writeToFile("README.md", data);
    // })
};  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (yourInput) {
        writeToFile("README.md", generateMarkdown(yourInput));
    });
};

// Function call to initialize app
init();
