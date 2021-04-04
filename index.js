const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Intern');

const managerArr = []
const internArr = []
const engineerArr = []
const promptUser = () => {
    inquirer.prompt([
        {
            message: 'Enter team members name:',
            type: 'input',
            name: 'name',
        },
        {
            type: 'list',
            message: 'select team members role',
            name: 'employeeRole',
            choices: [
                "Engineer",
                "Intern",
                "Manager",
            ]
        },
        {
            type: 'list',
            message: 'Add new member?',
            name: 'addTeamMember',
            choices: [
                'yes',
                'no',
            ]
        }
    ])
        .then((employee) => {
            if (employee.employeeRole === 'Manager'){
                managerArr.push(employee)
            }
            if (employee.employeeRole === 'Engineer'){
                engineerArr.push(employee)
            }
            if (employee.employeeRole === 'Intern'){
                internArr.push(employee)
            }
            if (employee.addTeamMember === 'yes') {
                promptUser()
            }
            else {
                writeToFile(managerArr,engineerArr,internArr);
}});
}


function writeToFile(m,e,i) {
    fs.writeFile("dist/index.html", generateHtml(m,e,i), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('New Profile Generated');
    })
};
function manager(data) {
    return data.forEach(item => {
        console.log(item)
        return `<div><h1> ${item.name} </h1><h2> Manager </h2></div>`
    })
};
function engineer(data) {
    console.log(data);
    return data.forEach(item => {
        console.log(item)
        return `<div><h1> ${item.name} </h1><h2> Engineer </h2></div>`
    })
};
function intern(data) {
    return data.forEach(item => {
        console.log(item)
        return `<div><h1> ${item.name} </h1><h2> Intern </h2></div>`
    })
};
// TODO: Create a function to initialize app
function init() {
    promptUser()
};
function generateHtml(m,e,i) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meet the Team</title>
    </head>
    <h1>Name</h1>
    <h1>Email</h1>
    <body>
        ${manager(m)}
        ${engineer(e)}
        ${intern(i)}
    </body>
    </html>`
};
// Function call to initialize app
init();