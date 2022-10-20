// defining variables
const inquirer = require("inquirer");

// defining employees
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// defining technical variables
const generateHtml = require("./src/template");
const fs = require("fs");
const team = []

// create manager prompts
const managerPrompts = [
    {
        type: "input",
        name: "manageName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is your ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    },
];

function managerInputs() {
    inquirer.prompt(managerPrompts).then((answers) => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
        team.push(manager)
        promptMenu();
    });
}

// gives option to add more employees
const employeeQuestions = [
    {
        type: "list",
        name: "otherEmployees",
        message: "Are there any other employees to add?",
        choices: ["Engineer", "Intern", "No one else to add"],
    },
];

// create engineer prompts
const engineerPrompts = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee number",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
    },
    {
        type: "input",
        name: "gitUn",
        message: "What is the engineer's GitHub username?",
    },
];

// create intern prompts
const internPrompts = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's employee number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What school did the intern go to?",
    },
];

function promptMenu() {
    inquirer.prompt(employeeQuestions).then((answers) => {
        console.log(answers);
        if (answers.otherEmployees === "Engineer") {
            engineerInputs();
        }
        if (answers.otherEmployees === "Intern") {
            internInputs();
        }
        if (answers.otherEmployees === "No one else to add") {
            buildHTML(team)
        }
    });
}

// create functions that would be transferred into HTML document.
function engineerPrompt() {
    inquirer.prompt(engineerPrompts).then((engineerResponses) => {
        const engineer = new Engineer(engineerResponses.engineerName, engineerResponses.engineerID, engineerResponses.email, engineerResponses.gitUser)
        team.push(engineer)
        promptMenu();
    });
}

function internPrompt() {
    inquirer.prompt(internPrompts).then((internResponses) => {
        const intern = new Intern(internResponses.internName, internResponses.internID, internResponses.email, internResponses.school)
        team.push(intern)
        promptMenu();
    });
}

// creates HTML file
function buildHTML() {
    fs.writeFile("./dist/index.html", generateHtml(team), function(error) {
        if(error) {
            console.log(error)
        } else {
            console.log("HTML succeffully created!")
        }
    })
}
managerInputs();