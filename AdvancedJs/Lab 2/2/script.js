function shape(n) {
	if (this.constructor == shape) {
		throw "this is abstract class";
	}
	this.NumberOfSides = n;
}
shape.prototype.showInfo = function () {
	console.log(this.NumberOfSides);
};
function Rectangle(w, h, n) {
	// if (Rectangle.count < 1) {
	this.width = w;
	this.height = h;
	window.shape.call(this, n);
	Rectangle.count++;
	// } else {
	// 	throw "More Rectangles are created";
	// }
}
Rectangle.prototype = Object.create(shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.CalcA = function () {
	return this.width * this.height;
};
Rectangle.prototype.calcP = function () {
	// console.log(this.width);
	return this.width * 2 + this.height * 2;
};
Rectangle.prototype.toString = function () {
	alert(
		this.width +
			" , " +
			this.height +
			" , " +
			this.calcP() +
			" , " +
			this.CalcA()
	);
};
Rectangle.count = 0;
var r1 = new Rectangle(5, 3, 3);
r1.showInfo();
r1.calcP();
// r1.toString();
// var r2 = new Rectangle(1, 1, 1);
function Square(w, n) {
	window.Rectangle.call(this, w, w, n);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.count = 0;
var s1 = new Square(3, 3);
