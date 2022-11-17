// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');

const generatorMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'what is the title of your project?',
    name: 'Title'
}, {
    type: 'input',
    message: 'provide detail information about the project.',
    name: 'Description'
}, {
    type: 'input',
    message: 'Table of Content',
    name: 'Table of Content'
}, {
    type: 'input',
    message: 'Any specific installation that would be needed to run application? ',
    name: 'Application'
}, {
    type: 'input',
    message: 'Instructions on how to use the app.',
    name: 'Usage'
}, {
    type: 'input',
    message: 'what licensing is being used (MIT..)?',
    name: 'License'
}, {
    type: 'input',
    message: 'Anybody helpded you in this project? Contributors?',
    name: 'Contributions'
}, {
    type: 'input',
    message: 'What commands are needed to test this app?',
    name: 'Tests'
}, {
    type: 'input',
    message: 'Have any questions? Feel free to contact me for any questions.',
    name: 'Questions'
}, {
}
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generatorMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
