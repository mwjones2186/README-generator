// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utilities/generateMarkdown')
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to Title your readme file?',
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Please write a breif discription of your application. Please include: What was your motivation? Why did you build this project? What problem does this solve? What did you learn? What makes your project stand out? ',

    },
   {
        type: 'list',
        name: 'license',
        message: 'Please select all liscenses that apply',
        choices: ['apache', 'mozilla', 'Eclipse', 'GNU', 'none']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How would/could someone help contribute to furthering this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are/were used in making sure this application works properly?'
    },
    {
        type: 'input',
        name: 'questions',
        messge: 'Do you have any questions that you would like answered?'
    },



];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
return fs.writeFileSync(path.join(process.cwd(), filename), data)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((res)=> {
    console.log(res)
    writeToFile('README.md', generateMarkdown(res))
})
}

// Function call to initialize app
init();
