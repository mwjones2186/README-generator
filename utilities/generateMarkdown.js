// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//google github licenses. 
function renderLicenseBadge(license) {
  if(license === 'none'){
    return '';
  }
  return `![${license}](https://img.shields.io/badge/License-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return '';
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return '';
  }
  return `## License
  
  This application is covered under the ${license} license.`;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  
  ## Description 

  ${data.discription}.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}.
  * [Contribution](#contribution)

  ## Installation
  ${data.installation}.

  ## Usage

  ${data.usage}.

  ## Contribution

  ${data.contribution}.

  ## Tests

  ${data.tests}.

  ## Questions

  ${data.questions}.

  `;
  };



module.exports = generateMarkdown;
