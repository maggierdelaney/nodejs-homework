// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeToFile } = require('fs').promises;

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
        message: 'Please describe your project'
    },
]);
};
// .then((answers) => {
//     const readmeContent = generateReadme(answers);

//     fs.writeFile('readme.md', readmeContent, (err) =>
//         err ? console.log(err) : console.log('Created readme!')
//     );
// });

// TODO: Create a function to write README file
// function writeToFile('readme.md', generateReadme(data)) => {

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeToFile('readme.md', generateReadme(answers)))
        .then(() => console.log('Successfully created readme'))
        .catch((err) => console.error(err));
    };

// Function call to initialize app
init();
