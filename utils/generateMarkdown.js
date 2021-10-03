//MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//ISC: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//GNU GPLv3: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'ISC') {
        const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    } else {
        iscBadge = '';
    }

    if (license === 'MIT') {
        const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else {
        mitBadge = '';
    }

    if (license === 'GNU GPLv3') {
        const gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else {
        gnuBadge = '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'ISC') {
        const iscLink = `(https://opensource.org/licenses/ISC)`
    } else {
        iscLink = '';
    }

    if (license === 'MIT') {
        const mitLink = `(https://opensource.org/licenses/MIT)`
    } else {
        mitLink = '';
    }

    if (license === 'GNU GPLv3') {
        const gnuLink = `(https://www.gnu.org/licenses/gpl-3.0)`
    } else {
        gnuLink = '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return '# License'
            + renderLicenseBadge() + renderLicenseLink()
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}  
    https://github.com/${data.github}  
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
    #Tests  
    Command used to run tests on this application: ${data.tests}  
    # Questions  
    If you have any questions, please contact me at ${data.email}`;
}

module.exports = generateMarkdown;