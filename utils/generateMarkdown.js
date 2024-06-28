// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license == null
    ? badge = ""
    : badge = `![Static Badge](https://img.shields.io/badge/license-%24%7Blicense%7D-blue)`;
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license == null
    ? link = ""
    : link = `[learn more](https://medium.com/@avinashvagh/github-licenses-explained-a-quick-guide-46d98ef4ca81)`;
  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();
  license == null
    ? licenseSection = ""
    : licenseSection = `This project is licensed under ${license}. ${badge} ${link}`;
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, description, installation, usage, contribution, test, license, username, email } = answers
  renderLicenseSection(license);
  return `# ${title}

  ## Description
  ${description}

  ## Table of Contents</br>
  [Installation](#installation)</br>
  [Usage](#Usage)</br>
  [License](#License)</br>
  [Contributing](#Contributing)</br>
  [Tests](#Tests)</br>
  [Questions](#Questions)</br>
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is licensed under ${license}. ${badge} ${link}

  ## Contributing
  ${contribution}
  
  ## Tests
  ${test}

  ## Questions?
  Find me on GitHub: [${username}](https://github.com/${username}/)</br>
  Feel free to reach out with additional questions: ${email}
`;
}

module.exports = generateMarkdown;

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// GIVEN a command-line application that accepts user input...........................

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO:::::::::::
// # PROJECT TITLE
// ## DESCRIPTION
// ## TABLE OF CONTENTS
// ## INSTALLATION
// ## USAGE
// ## LICENSE
// ## CONTRIBUTING
// ## TESTS
// ## QUESTIONS

// ---------------------------------------------------------------------------------
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// TODO:::::::::::
// [x] write function

// ---------------------------------------------------------------------------------
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



// ---------------------------------------------------------------------------------
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO:::::::::::
// [x] provide list of options
// [x] add license badge
// [x] add license info in section


// ---------------------------------------------------------------------------------
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// TODO:::::::::::
// [x] add username to questions section
// [] link username to github profile

// ---------------------------------------------------------------------------------
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// TODO:::::::::::
// [x] email address in questions section
// [x] plain text blurb with direction to reach out

// ---------------------------------------------------------------------------------
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO:::::::::::
// [] links in table of contents (#section?)

// ---------------------------------------------------------------------------------

// [x] Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file *******before******** installing any npm dependencies.
// [x] Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

// TODO:::::::::::
// [] Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// (Refer to the Fullstack Blog Video Submission Guide for additional guidance on creating a video.)

// TODO:::::::::::
// [] Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// Deliverables: 20%
// [] (1) A sample README generated using the application must be submitted.

// [] (2) Your GitHub repository containing your application code.

// Walkthrough Video: 27%
// [] A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

// The walkthrough video must demonstrate...
// [] ...how a user would invoke the application from the command line.

// [] ...how a user would enter responses to all of the prompts in the application.

// [] ...a generated README that matches the user input and has a functioning table of contents.

// Technical Acceptance Criteria: 40%
// [] Uses the Inquirer package.

// Repository Quality: 13%
// [x] ...has a unique name.

// [x] ...follows best practices for file structure and naming conventions.

// [x] ...follows best practices for class/id naming conventions, indentation, quality comments, etc.

// [x] ...contains multiple descriptive commit messages.

// [] ...contains a high-quality README with description and a link to walkthrough video.

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// Review 
// You are required to submit the following for review:

// [] A walkthrough video demonstrating the functionality of the application.

// [] A sample README.md file for a project repository generated using your application

// [] The URL of the GitHub repository, with a unique name and a README describing the project