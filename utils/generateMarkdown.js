// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    badge = ""
  } else {
    badge = `![Static Badge](https://img.shields.io/badge/license-${license}-blue)`
  };
  return badge;
};

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) {
    link = ""
  } else {
    link = `[learn more](https://medium.com/@avinashvagh/github-licenses-explained-a-quick-guide-46d98ef4ca81)`
  }
  return link;
};

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  licenseSection = `${badge} ${link}`;
  return licenseSection;
};

// DONE: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, description, installation, usage, contribution, test, license, username, email } = answers;
  let licenseSection = renderLicenseSection(license);
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
  ${licenseSection}

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