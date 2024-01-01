import { Shape } from "./shape.js";
class Rectangle extends Shape {
	constructor(length, width) {
		super();
		this.length = length;
		this.width = width;
	}

	area() {
		return this.length * this.width;
	}

	perimeter() {
		return 2 * (this.length + this.width);
	}
}

class Square extends Rectangle {
	constructor(length) {
		super();
		this.length = length;
	}

	area() {
		return this.length * this.length;
	}

	perimeter() {
		return 2 * (this.length + this.length);
	}
}

export { Rectangle, Square };
