var inquirer = require('inquirer');
var axios = require('axios');
var html = require('./generateHTML.js');

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {
    inquirer.prompt([
        {
            name: 'github_username',
            message: 'What is your Github username ?'
        }
    ])
    .then(answers => {
        var username = answers.github_username;
        const GITHUB = `https://api.github.com/users/${username}`;
        axios.get(GITHUB).then(response => {
            console.log(html.generateHTML({
                color: 'blue'
            }))
        })
    })
}


init();
