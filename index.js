// defining team variables
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// other required variables
const inquirer = require("inquire");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template")

teamArray = [];

// app running functionalities

function runApp () {
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee is joining the team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "No team members added at this time."]
        }]).then(function(userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }

    // the use of OOP functions [MANAGER]
    function addManager() {
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the manager?"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the ID number of the manager?"
            },
            {
                type: "input",
                name: "managerEmailAddress",
                message: "What is the email address of the manager?",
            },
            {
                type: "input",
                name: "managerOffceNumber",
                message: "What is the manager's office number?",
            }
        ]).then(answers => {
            const manager = new manager(answers.managerName, answers.managerID, answers.managerEmailAddress, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    // the use of OOP functions [ENGINEER]
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of the engineer?"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the ID number of the engineer?"
            },
            {
                type: "input",
                name: "engineerEmailAddress",
                message: "What is the email address of the engineer?"
            },
            {
                type: "input",
                name: "engineerOfficeNumber",
                message: "What is the engineer's office number?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the engineer's GitHub username?"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmailAddress, answers.engineerOfficeNumber, answers.engineerGitHub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    // the use of OOP functions [INTERN]
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "InternName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "InternID",
                message: "What is the intern's employee ID number?"
            },
            {
                type: "input",
                name: "internEmailAddress",
                message: "What is the intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school is the intern attending?"
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmailAddress, answers.internSchool);
            teamArray.push(Intern);
            createTeam();
        });
    }

    function htmlBuilder() {
        console.log("The team was created successfully!")
        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    }
    createTeam();
}

runApp();