---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
## User Story:
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
## Acceptance Criteria:
GIVEN a command-line application that accepts user input...........................

WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

### TODO:::::::::::
    # PROJECT TITLE
    ## DESCRIPTION
    ## TABLE OF CONTENTS
    ## INSTALLATION
    ## USAGE
    ## LICENSE
    ## CONTRIBUTING
    ## TESTS
    ## QUESTIONS

---------------------------------------------------------------------------------
WHEN I enter my project title
  THEN this is displayed as the title of the README

### TODO:::::::::::
    [] write function

---------------------------------------------------------------------------------
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

### TODO:::::::::::
    [] write functions.... array of section titles x array of info? deconstruction?


---------------------------------------------------------------------------------
WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

### TODO:::::::::::
    [] provide list of options
    [] add license badge
    [] add license info in section


---------------------------------------------------------------------------------
WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

### TODO:::::::::::
    [] add username to questions section
    [] link username to github profile

---------------------------------------------------------------------------------
WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

### TODO:::::::::::
    [] email address om questions section
    [] plain text blurb with direction to reach out

---------------------------------------------------------------------------------
WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README

### TODO:::::::::::
    [] links in table of contents (#section?)

---------------------------------------------------------------------------------
### TODO:::::::::::
    [] Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file *******before******** installing any npm dependencies.

### TODO:::::::::::
    [] Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

### TODO:::::::::::
    [] Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

(Refer to the Fullstack Blog Video Submission Guide for additional guidance on creating a video.)

### TODO:::::::::::
    [] Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

## Grading Criteria:

- Deliverables: 20%
1) A sample README generated using the application must be submitted.

2) Your GitHub repository containing your application code.

- Walkthrough Video: 27%

A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

- The walkthrough video must demonstrate...

[] ...how a user would invoke the application from the command line.

[] ...how a user would enter responses to all of the prompts in the application.

[] ...a generated README that matches the user input and has a functioning table of contents.

- Technical Acceptance Criteria: 40%

[] Uses the Inquirer package.

- Repository Quality: 13%

[] ...has a unique name.

[] ...follows best practices for file structure and naming conventions.

[] ...follows best practices for class/id naming conventions, indentation, quality comments, etc.

[] ...contains multiple descriptive commit messages.

[] ...contains a high-quality README with description and a link to walkthrough video.

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

## Review 
You are required to submit the following for review:

1) A walkthrough video demonstrating the functionality of the application.

2) A sample README.md file for a project repository generated using your application

3) The URL of the GitHub repository, with a unique name and a README describing the project