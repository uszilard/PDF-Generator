var inquirer = require('inquirer');
var axios = require('axios');



const questions = [

];

function writeToFile(fileName, data) {

}

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "githubUsername",
            message: "What is your Github username?",

        }
    ]).then(answers => {

        var githubUsername = answers.githubUsername

        axios.get(`https://api.github.com/users/${githubUsername}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })


    })



}

init();

