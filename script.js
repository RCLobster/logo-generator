
// save dependencies as variables
const inquirer = require('inquirer');
const jest = require('jest');
const shapes = require('./lib/shapes');

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
    .then((data) => {
        console.log(data);

        let newShape;
        switch(data.shape.toLowerCase()) {
            case 'circle':
                newShape = new shapes.Circle(data.text, data.txtColor, data.shapeColor, data.shape);
                break;
            case 'triangle':
                newShape = new shapes.Triangle(data.text, data.txtColor, data.shapeColor, data.shape);
                break
        }

        console.log(newShape);
    });