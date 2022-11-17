// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## License
Project use the following license: ${data.License}

## Installation
The following installations would need to be installed in order to run the application.
${data.Application}

## Usage
Instruction on how to use the app:
${data.Usage}

## Contributors 
${dta.Contributors}

## Test
Following indormation is needed to run the test: 
${data.Tests}

## Questions
Have any questions? Feel free to contact me for any questions.
${data.Username}

`;
}

module.exports = generateMarkdown;
