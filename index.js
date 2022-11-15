// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
//make sure to require the exports
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please detail how to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contributors and cited sources',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please detail how to test your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',  
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['Apache_2.0', 'Boost_1.0', 'None'],
    },

]);
};

// TODO: Create a function to write README file
// TODO: Create a function to initialize app

const init = () => {
    questions()
        .then((answers) => writeFile('generated-readme.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully created readme'))
        .catch((err) => console.error(err));
    };

// Function call to initialize app
init();
