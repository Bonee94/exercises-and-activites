const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = ({userName, userLocation}) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node Practice</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
        <h1 class="">Hi, my name is ${userName}</h1>
        <h2 class="">I live in ${userLocation}</h2>
    </body>
    </html>`
}
console.log(generateHTML)
inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            message: 'What city do you live in?',
            name: 'userLocation',
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'phone', 'telekinesis'],
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'userGithubURL',
        },
    ])
    .then((answer) => {
        console.log(answer)
        
        const page = JSON.stringify(generateHTML(answer));
        console.log(page);
        fs.writeFile('index.html',  answer, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

