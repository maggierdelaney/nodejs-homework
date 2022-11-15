// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  # Description
  ${data.description}

  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
${renderLicenseLink(data.license)}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contribution}

  # Tests
  ${data.test}

  # Questions
  For questions, please consider checking out my github profile, or email me directly: 
  - Github: 
[https://github.com/${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
  return '';
  } else {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else {
    return `  - [License](#license)`;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else {
    return `# License
    Distributed under the ${license} License.`
  };
}

module.exports = generateMarkdown;
