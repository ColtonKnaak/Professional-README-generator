// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { title } = require('process');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleName => {
            if (titleName) {
                return true;
            }
            else {
                console.log('Enter your title name please.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: description => {
            if (description) {
                return true;
            }
            else {
                console.log('Enter a description of your project please.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you creat your project?',
        validate: why => {
            if (why) {
                return true;
            }
            else {
                console.log('Enter why you made your project please.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How someone will use your project.',
        validate: usage => {
            if (usage) {
                return true;
            }
            else {
                console.log('Enter how someone will use your project please.')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Mozilla-Public', 'Apache', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: license => {
            if (license) {
                return true;
            }
            else {
                console.log('Select a license for your project please.');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
        validate: github => {
            if (github) {
                return true;
            }
            else {
                console.log('Enter your Github username please.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to enter your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
        if (error) {
            return console.log('An error occurred : ' + error);
        }
    })
};
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{
        writeToFile(response.title, response);
    })
    .catch((error) => {
        console.log(error);
    })
}

// Function call to initialize app
init(); 
