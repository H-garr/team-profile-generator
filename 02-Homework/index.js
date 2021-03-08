const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
// all of our employees
const inquirer = require('inquirer');
const fs = require('fs');
// our requires for the app to run smoothly
const html = require('./Develop/src/page-template');
// our html page that will fill via fs
var team = [];
// empty team array
startMenu();

function startMenu() {
        inquirer.prompt([{
                type: "list",
                name: "startmenu",
                message: "Choose one of the following options of what you would like to do.",
                choices: ["Start building your team", "View current team", "Exit"]

                // decided against giving each set of questions a function name then calling it ie : .prompt(startquestions)
        }]).then((response) => {
                switch (response.startmenu) {
                        case "Start building your team":
                                newManager();
                                break;
                        case "View current team":
                                generateTeam();
                                break;
                        case "Exit":
                                console.log("Please press 'control' and 'C' to exit, See you next time!")
                        default: "Please choose an option."

                }
        });
}
// we will create all of our teams from here using external inputs from user
function newManager() {
        inquirer.prompt([
                {
                        type: "input",
                        name: "managerName",
                        message: "Please enter in your manager's name.",

                },
                {
                        type: "input",
                        name: "managerID",
                        message: "Please enter in manager's ID number.",


                }, {
                        type: "input",
                        name: "managerEmail",
                        message: "Please enter in your manager's email address.",

                }, {
                        type: "input",
                        name: "managerOffice",
                        message: "Please enter in your manager's office number.",

                }
        ])
                .then(response => {
                        let manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
                        // collecting response, then pushing it into our whole team array
                        team.push(manager);
                        buildTeam();
                })
}
// end of manager creation
// then we call to build the team next here
function buildTeam() {
        // first we have to specify what kind of team member they would like creating a loop and providing an option for when they'd like to end
        inquirer.prompt([{
                type: "list",
                name: "choice",
                message: "What kind of employee would you like to add?",
                choices: ["Engineer!", "Intern!", "I am done adding to my team, lets generate!"]
        }
        ]).then((response) => {
                switch (response.choice) {
                        case "Engineer!":
                                newEngineer();
                                // call the create eningeer func
                                break;
                        case "Intern!":
                                newIntern();
                                // call the create intern func 
                                break;
                        case "Intern!", "I am done adding to my team, lets generate!":
                                generateTeam();
                                // send them to a function which then writes the file for them and ends the process
                                break;
                }
        });
}
function newEngineer() {
        inquirer.prompt([
                {
                        type: "input",
                        name: "engineerName",
                        message: "Please enter in your engineer's name.",

                },
                {
                        type: "input",
                        name: "engineerID",
                        message: "Please enter in engineer's ID number.",


                }, {
                        type: "input",
                        name: "engineerEmail",
                        message: "Please enter in your engineer's Email address.",

                }, {
                        type: "input",
                        name: "engineerGithub",
                        message: "Please enter in your engineer's GitHub Username.",
                }
        ])
                .then(response => {
                        let engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
                        team.push(engineer);
                        buildTeam();
                        // take the responses, push into the team array then run the build team function again to give the user the option to create another employee
                })
}
// end of new engineer building
function newIntern() {
        inquirer.prompt([
                {
                        type: "input",
                        name: "internName",
                        message: "Please enter in your intern's name.",

                },
                {
                        type: "input",
                        name: "internID",
                        message: "Please enter in intern's ID number.",


                }, {
                        type: "input",
                        name: "internEmail",
                        message: "Please enter in your intern's Email address.",

                }, {
                        type: "input",
                        name: "internSchool",
                        message: "Please enter in your intern's School.",

                }
        ])
                .then(response => {
                        let intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
                        team.push(intern);
                        // console.log(response.engineerGithub)
                        buildTeam();
                        // take the responses, push into the team array then run the build team function again to give the user the option to create another employee
                })
}
// end of intern func

function generateTeam() {
        fs.writeFileSync("index.html", html(team), (err) => {
                if (err) {
                        console.log(err);
                }
        })

}
// fs function to create add to/create the index.html file