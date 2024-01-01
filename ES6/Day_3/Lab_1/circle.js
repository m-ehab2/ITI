import { Shape } from "./shape.js";
export default class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	area() {
		return Math.PI * this.radius ** 2;
	}

	perimeter() {
		return 2 * Math.PI * this.radius;
	}
}
