// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
require("./utils/generateMarkdown");

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
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const mdContent = generateMarkdown(answers);

            fs.writeFile("README-template.md", mdContent, (err) =>
                err ? console.log(err) : console.log("Successfully created MD file!")
            )
        });
};

// Function call to initialize app
init();
