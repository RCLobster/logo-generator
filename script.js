
// save dependencies as variables
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const shapes = require('./lib/shapes');

//take in user data for svg shape creation
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
    //take that data and determine which Shape class to run using switch case chain
    .then((data) => {
        console.log(data);

        let newShape;
        switch(data.shape.toLowerCase()) {
            //if the user chose 'circle' run all user data through the Circle constructor
            case 'circle':
                newShape = new shapes.Circle(data.text, data.txtColor, data.shapeColor, data.shape);
                break;
            case 'triangle':
                newShape = new shapes.Triangle(data.text, data.txtColor, data.shapeColor, data.shape);
                break
            case 'square':
                newShape = new shapes.Square(data.text, data.txtColor, data.shapeColor, data.shape);
                break
            default:
                console.error('Invalid Shape Choice');
                return;
        }

        //based on which shape the user chose, run the relevant function to render that svg
        if(data.shape === "Circle") {
            writeCircleSVG(newShape);
        } else if(data.shape === "Triangle") {
            writeTriangleSVG(newShape);
        } else if(data.shape === "Square") {
            writeSquareSVG(newShape);
        }
    })
    .catch((err) => {
        if(err){
            console.error(err);
        }
    });

// take user data and shove it into svg formated code
function writeCircleSVG(shape) {
    console.log(shape);
    const shapeData = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape.shape.toLowerCase()} cx="50" cy="50" r="40" fill="${shape.shapeColor}" />
    <text x="16.5%" y="26%" dominant-baseline="middle" text-anchor="middle" fill="${shape.txtColor}" font-size="20" font-family="Arial">${shape.text}</text>
</svg>`;

    //write a new svg file with user data embedded
    fs.writeFile(`./examples/${shape.text}-${shape.shape}.svg`, shapeData, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('New circle created and saved!');
        }
    })
};

// take user data and shove it into svg formated code
function writeTriangleSVG(shape) {
    const shapeData = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 90,90 10,90" fill="${shape.shapeColor}" />
    <text x="16.75%" y="33%" dominant-baseline="middle" text-anchor="middle" fill="${shape.txtColor}" font-size="20" font-family="Arial">${shape.text}</text>
</svg>`;

    //write a new svg file with user data embedded
    fs.writeFile(`./examples/${shape.text}-${shape.shape}.svg`, shapeData, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('New triangle created and saved!');
        }
    })
};

// take user data and shove it into svg formated code
function writeSquareSVG(shape) {
    const shapeData = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" x="10" y="10" fill="${shape.shapeColor}" />
    <text x="20%" y="30%" dominant-baseline="middle" text-anchor="middle" fill="${shape.txtColor}" font-size="20" font-family="Arial">${shape.text}</text>
</svg>`;

    //write a new svg file with user data embedded
    fs.writeFile(`./examples/${shape.text}-${shape.shape}.svg`, shapeData, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('New square created and saved!');
        }
    })
};