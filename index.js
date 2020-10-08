const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
            }
        },
        {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
        },
        {
            type: 'input',
            message: 'Include GitHub Repo',
            name: 'username',
            default: 'ktinj',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
                }
            },
            {
                type: 'input',
                message: "Describe the steps required for installation.",
                name: 'installation'
            },
            {
                type: 'input',
                message: "Provide instructions and examples of usage.",
                name: 'usage'
            },
            {
                type: 'input',
                message: "Provide guidelines for contributors.",
                name: 'contributing'
            },
            {
                type: 'input',
                message: "Provide any tests written for the application.",
                name: 'tests'
            },
            {
                type: 'input',
                message: "Enter a license for your project.",
                name: 'license'
            },
            {
                type: 'input',
                message: "Questions?",
                name: 'questions'
            }
];

 // call GitHub api
const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
    
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        return console.log(err);
      }
    
      console.log("Your README.md file has been generated")
  });

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {

    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);

         // Call GitHub api for user info
         const userInfo = await api.getUser(userResponses);
         console.log("Your GitHub user info: ", userInfo);
     
         // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
         console.log("Generating your README")
         const markdown = generateMarkdown(userResponses, userInfo);
         console.log(markdown);
     
         // Write markdown to file
         await writeFileAsync('ExampleREADME.md', markdown);
 
     } catch (error) {
         console.log(error);
     }
 }
};
init();