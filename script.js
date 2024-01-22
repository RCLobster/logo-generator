// save dependencies as variables
const inquirer = require('inquirer');
const jest = require('jest');

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'text',
            message: 'Give me three letters for your logo.'
        },
        
    ])