const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Intern');

const managerArr = [];
const internArr = [];
const engineerArr = [];
const promptUser = () => {
    inquirer.prompt([
        {
            message: 'Enter team members name:',
            type: 'input',
            name: 'name',
        },
        {
            message: 'Enter team members email:',
            type: 'input',
            name: 'email',
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
};


function writeToFile(m,e,i) {
    fs.writeFile("dist/index.html", generateHtml(m,e,i), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('New Profile Generated');
    });
};
function manager(data) {
    var results = ''
    data.forEach(item => {
    results+= `<div><h1> ${item.name} </h1><h2> Manager </h2></div>`
    })
    return results
};
function engineer(data) {
    var results = ''
    data.forEach(item => {
    results+= `<div><h1> ${item.name} </h1><h2> Engineer </h2></div>`
    })
    return results
};
function intern(data) {
    var results = ''
    data.forEach(item => {
    results+= `<div><h1> ${item.name} </h1><h2> Intern </h2></div>`
    })
    return results
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Meet the Team</title>
    </head>
    
    <body>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Member Position</h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${manager(m)} </h6>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Member Position</h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${engineer(e)} </h6>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Member Position</h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${intern(i)} </h6>
            </div>
        </div>
    </body>
    
    </html>`
};
// Function call to initialize app
init();