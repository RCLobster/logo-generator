class Shape {
    constructor(text, txtColor, shapeColor) {
        this.text = text;
        this.txtColor = txtColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, txtColor, shapeColor, shape) {
        super(text, txtColor, shapeColor);
        this.shape = shape;
    }
}

class Square extends Shape {
    constructor(text, txtColor, shapeColor, shape) {
        super(text, txtColor, shapeColor);
        this.shape = shape;
    }
}

class Triangle extends Shape {
    constructor(text, txtColor, shapeColor, shape) {
        super(text, txtColor, shapeColor);
        this.shape = shape;
    }
}

module.exports = {Circle, Triangle, Square};