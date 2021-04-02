const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Intern');

const employee = () => {
    inquirer.prompt([
        {
            message: 'Enter team members name:',
            name: 'name'
        },
        {
            type: 'list',
            message: 'select team members role',
            choices: [
            "Engineer",
            "Intern",
            "Manager",
            "Employee",
            ]
        },
        {
            type: 'list',
            message: 'Add new member?',
            choices: [
                'yes',
                'no',
            ]
        }
    ])
    .then((employee) => writeToFile(employee))
    .then(() => console.log('Successfully created profiles'))
    .catch((err) => console.error(err))};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("index.html", generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('New Profile Generated');
    })
};
// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();