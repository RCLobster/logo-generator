
const {Circle, Triangle, Square} = require('../lib/shapes');

// tests for circle element
describe("Circle", () => {
    test("should render svg for a green circle element", () => {
      const circle = new Circle('CIR', 'black', 'green', 'Circle');
      expect(circle.shapeColor).toEqual('green');
    });
    test("should render the letters CIR for circle element", () => {
        const circle = new Circle('CIR', 'black', 'green', 'Circle');
        expect(circle.text).toEqual('CIR');
    });
    test("should render the letters CIR in the color black", () => {
        const circle = new Circle('CIR', 'black', 'green', 'Circle');
        expect(circle.txtColor).toEqual('black');
    });
    test("should render a circle shape", () => {
        const circle = new Circle('CIR', 'black', 'green', 'Circle');
        expect(circle.shape).toEqual('Circle');
    });
  });

// tests for square element
  describe("Square", () => {
    test("should render svg for a yellow square element", () => {
      const square = new Square('BOX', 'red', 'yellow', 'Square');
      expect(square.shapeColor).toEqual('yellow');
    });
    test("should render the letters BOX for square element", () => {
        const square = new Square('BOX', 'red', 'yellow', 'Square');
        expect(square.text).toEqual('BOX');
    });
    test("should render the letters BOX in the color red", () => {
        const square = new Square('BOX', 'red', 'yellow', 'Square');
        expect(square.txtColor).toEqual('red');
    });
    test("should render a square shape", () => {
        const square = new Square('BOX', 'red', 'yellow', 'Square');
        expect(square.shape).toEqual('Square');
    });
  });

  // tests for triangle element
  describe("Triangle", () => {
    test("should render svg for a blue triangle element", () => {
      const triangle = new Triangle('TRI', 'orange', 'blue', 'Triangle');
      expect(triangle.shapeColor).toEqual('blue');
    });
    test("should render the letters BOX for triangle element", () => {
        const triangle = new Triangle('TRI', 'orange', 'blue', 'Triangle');
        expect(triangle.text).toEqual('TRI');
    });
    test("should render the letters BOX in the color red", () => {
        const triangle = new Triangle('TRI', 'orange', 'blue', 'Triangle');
        expect(triangle.txtColor).toEqual('orange');
    });
    test("should render a triangle shape", () => {
        const triangle = new Triangle('TRI', 'orange', 'blue', 'Triangle');
        expect(triangle.shape).toEqual('Triangle');
    });
  });