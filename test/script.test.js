const script = require('../script');

describe('writeCircleSVG', () => {
    it('should take in user input and include those parameters into .svg file generation', () => {
        const shape = {
            text: 'OOF',
            txtColor: 'blue',
            shapeColor: 'orange',
            shape: 'circle'
        };

        expect(script.writeCircleSVG(shape)).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="orange" />
    <text x="16.5%" y="26%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="20" font-family="Arial">OOF</text>
</svg>`)
    });
});