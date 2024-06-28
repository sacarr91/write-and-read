// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

// DONE: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'README Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation Instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage Information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter Contribution Guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter Test Instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ["Apache_License_2.0", "GNU_General_Public_License_v3.0", "MIT_License", "BSD_2-Clause_'Simplified'_License", "BSD_3-Clause_'New'_or_'Revised'_License", "Boost_Software_License_1.0", "Creative_Commons_Zero_v1.0_Universal", "Eclipse_Public_License_2.0", "GNU_Affero_General_Public_License_v3.0", "GNU_General_Public_License_v2.0", "GNU_Lesser_General_Public_License_v2.1", "Mozilla_Public_License_2.0", "The_Unlicense"],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address:',
    }];

// USED FS.PROMISES - DONE: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// DONE: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const mdContent = generateMarkdown(answers);

            writeFile("README-template.md", mdContent, (err) =>
                err ? console.log(err) : console.log("Successfully created MD file!")
            )
        });
};

// Function call to initialize app
init();
