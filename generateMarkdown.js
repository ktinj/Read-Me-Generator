function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents conditionally based on userResponses
  let tableContents = `## Table of Contents`;

  if (userResponses.installation !== '') { tableContents += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { tableContents += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { tableContents += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { tableContents += `
  * [Tests](#tests)` };


  // Generate markdown for the README
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  
  ## Description 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += tableContents;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  ## Installation
  
  ${userResponses.installation}`
  };
  
  // Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  ## Usage 
    
  ${userResponses.usage}`
  };
  
  
  // Contributing section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
    
  ${userResponses.contributing}`
  };
  

  // Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
