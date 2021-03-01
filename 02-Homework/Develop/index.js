const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/page-template")
var wholeteam = [];
var teamidarr = [];
// had help creating the two variables below
var newdirectory = path.resolve(_dirname, "output")
var newpath = path.join(newdirectory, "team.html")

function buildTeam() {
        // we will create all of our teams from here using external inputs
        function buildManagers() {
                inquirer.prompt(
                        [
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
                                        name: "managerId",
                                        message: "Please enter in manager's ID number.",
                                        validate: response => {
                                                var token = response.match(/^[1-9]\d*$/);
//learned about regex here and this allows the id to be inputed as a number.
// also wrote in es6 and es5 to show i am able to do both. 
                                                                if (token) {
                                                                        return true;
                                                                }
                                                                else return "That does not seem to be a valid response please try again. Make sure you have entered in the correct ID. ";
                                                        }
},{
                                        type:"input",
                                        name:"managerEmail",
                                        message:"Please enter in your manager's Email.",
                                        validate: response => {
                                                const token = response.match(/\S+@\S+\.\S+/);
                                                // regex for string,@ sign string then . string
                                        
                                        if (response) {
                                                return true;
                                        }
                                        else return "That does not seem to be a valid response. Please make sure your email is formatted like this : test@test.com";
                                }
},{
                                        type:"input",
                                        name:"managerOffice",
                                        message:"Please enter in your manager's office number.",
                                        validate: response => {
                                                var token = response.match( /^[1-9]\d*$/);
                                                if (token) {
                                                        return true;
                                                }
                                                else return "That office number does not seem to match our criteria. Please make sure you are entering in the number correctly.";
                                        }
}


                        ]
                )
        }
}


