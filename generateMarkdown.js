function generateMarkdown(userResponses, userInfo) {

  // generate table of cntents
  let tableContents = `## Table of Contents`;

  if (userResponses.installation !== '') { tableContents += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { tableContents += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { tableContents += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { tableContents += `
  * [Tests](#tests)` };


  // markdown for the README
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  
  ## Description 
  
  ${userResponses.description}
  `

  // add table of contents to markdown
  draftMarkdown += tableContents;
 
  // add license section since
  draftMarkdown += `
  * [License](#license)`;
  

  // installation 
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  ## Installation
  
  ${userResponses.installation}`
  };
  
  // usage 
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  ## Usage 
    
  ${userResponses.usage}`
  };
  
  
  // contributing 
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
    
  ${userResponses.contributing}`
  };
  

  // tests 
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };


  // license 
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // questions 
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};


  draftMarkdown += draftDev;
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
