/*
THE PLAN
1. take input for all parameters
*/

// save dependencies as variables
const inquirer = require('inquirer');
const jest = require('jest');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Give me three letters for your logo.'
        },
        {
            type: 'input',
            name: 'txtColor',
            message: 'What color would you like your letters to be?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?'
        }

    ])
    .then((answers) => {
        console.log(answers);
    });