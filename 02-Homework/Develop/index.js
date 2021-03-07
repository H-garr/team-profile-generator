const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// all of our employees
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const html = require('./src/page-template');
const template = require('./src/page-template');

var wholeteam = [];
const e = require('express');
// had help creating the two variables below and some of the requires i was missing


function startMenu() {
        inquirer.prompt([{
                type:"list",
                name:"startmenu",
                message:"Choose one of the following options of what you would like to do.",
                choices:["Start building your team","View current team","Exit"]}
                // decided against giving each set of questions a function name then calling it ie : .prompt(startquestions)
        ]).then((e) => {
                switch(e.startMenu){
                        case "Start building your team":
                                newManagers();
                                break;
                        case "View current team":
                                // open browser window here
                                break; 
                        case "Exit":
                                console.log("Please press 'control' and 'C' to exit, See you next time!")
                        default: "Please choose an option."

                }
        });
        }
        // we will create all of our teams from here using external inputs from user
        function newManagers() {
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
        let manager = new Manager(response.managerName,response.managerID,response.managerEmail,response.managerOffice);
        // re-writing manager here
        wholeteam.push(manager);
        buildTeam();
})
        // end of manager creation
        // then we call to build the team next here
       function buildTeam() {
                // first we have to specify what kind of team member they would like creating a loop and providing an option for when they'd like to end
                inquirer.prompt([{
                                type: "list",
                                name:"choice",
                                message: "What kind of employee would you like to add?",
                                choices:["Engineer!", "Intern!","I am done adding to my team, lets generate!"]
                        }
                ]).then((userResults) => {
                        switch(userResults.choice){
                                case "Engineer!":
                                        newEngineer();
                                        // call the create eningeer func
                                        break;
                                case "Intern!":
                                        // call the create intern func 
                                        break;
                                case "Intern!","I am done adding to my team, lets generate!":
                                        // send them to a function which then writes the file for them and ends the process
                                break;
                                }});
        }}
function newEngineer(){
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
                        name: "engineerGitHub",
                        message: "Please enter in your engineer's Git-Hub Username.",
                    
                }
        ])
 .then(response => {
                        let engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
                        wholeteam.push(engineer);
                        buildTeam();
                        // take the responses, push into the team array then run the build team function again to give the user the option to create another employee
                })
}
// end of new engineer building
function newIntern(){}