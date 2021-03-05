const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/page-template");
const e = require("express");
var wholeteam = [];
var teamidarray = [];
// had help creating the two variables below and some of the requires i was missing
var newdirectory = path.resolve(_dirname, "output")
var newpath = path.join(newdirectory, "team.html")

function startMenu() {
        inquirer.prompt([{
                type:"list",
                name:"startmenu",
                message:"Choose one of the following options of what you would like to do.",
                choices:["Start building your team","View current team","Exit"]}
        ]).then((e) => {
                switch(e.startMenu){
                        case "Start building your team":
                                buildManagers();
                                break;
                        case "View current team":
                                // open browser window here
                                break;
                        case "Exit":
                                console.log("Please press 'control' and 'C' to exit,See you next time!")

                }
        });
        }
        // we will create all of our teams from here using external inputs from user
        function buildManagers() {
                inquirer.prompt([
                                {
                                        type: "input",
                                        name: "managerName",
                                        message: "Please enter in your manager's name.",
                                        validate:
                                                function (response) {
                                                        console.log("log reponse" + a);
                                                        console.log(response);
                                                        if (response !== "") {
                                                                return true;
                                                                // validation
                                                        }
                                                        else return "That does not seem to be a valid response. ";
                                                }
                                },
                                {
                                        type: "input",
                                        name: "managerID",
                                        message: "Please enter in manager's ID number.",
                                        validate: response => {
                                                var token = response.match(/^[1-9]\d*$/);
                                                //learned about regex here and this allows the id to be inputed as a number and verified that it is a number.
                                                // also wrote in es6 and es5 to show i am able to do both. 
                                                if (token) {
                                                        return true;
                                                }
                                                else return "That does not seem to be a valid response please try again. Make sure you have entered in the correct ID. ";
                                        }
                                }, {
                                        type: "input",
                                        name: "managerEmail",
                                        message: "Please enter in your manager's Email.",
                                        validate: response => {
                                                var token = response.match(/\S+@\S+\.\S+/);
                                                // regex for string,@ sign string then . string

                                                if (response) {
                                                        return true;
                                                }
                                                else return "That does not seem to be a valid response. Please make sure your email is formatted like this : test@test.com";
                                        }
                                }, {
                                        type: "input",
                                        name: "managerOffice",
                                        message: "Please enter in your manager's office number.",
                                        validate: response => {
                                                var token = response.match(/^[1-9]\d*$/);
                                                if (token) {
                                                        return true;
                                                }
                                                else return "That office number does not seem to match the criteria. Please make sure you are entering in the number correctly.";
                                        }
                                }
                        ])
.then(response => {
        let manager = new Manager(response.managerName,response.managerID,response.managerEmail,response.managerOffice);
        // re-writing manager here
        teamidarray.push(response.managerID)
        // pushing the ID into the id array and the manager into the team array
        wholeteam.push(manager);
        // then we call to build the team next here
        buildTeam();
})
        }



