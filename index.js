// TODO: Include packages needed for this application
import inquire from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to Title your readme file?',
    }
    {
        type: 'input',
        name: 'discription',
        message: 'Please write a breif discription of your application.',

    }
    {
        type: 'input',
        name: 'motivation',
        message: 'Please discribe your motivation'
    }



];

// TODO: Create a function to write README file
function writeToFile(filename, data) {


}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
