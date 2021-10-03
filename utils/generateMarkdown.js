// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'ISC') {
        return 'https://img.shields.io/badge/License-ISC-blue.svg'
    }

    if (license === 'MIT') {
        return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    }

    if (license === 'GNU GPLv3') {
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    }

    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC'
    }

    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    }

    if (license === 'GNU GPLv3') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }

    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseSection(data.license)}  
 
# Description  
${data.description}  
# Table of contents  
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributors](#contributors)  
[Tests](#tests)  
[Questions](#questions)  
# Installation 
The following dependencies must be installed to use this application: ${data.install}  
# Usage  
How to use the application: ${data.usage}  
# License  
This project is licensed under the ${data.license} license.  
# Contributors  
${data.contributors}  
# Tests
Command used to run tests on this application: ${data.tests}  
# Questions  
If you have any questions, please contact me at ${data.email}
Github Link: https://github.com/${data.github} `;
}

module.exports = generateMarkdown;