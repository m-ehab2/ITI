function rect(x, y) {
	this.width = x;
	this.height = y;
}
rect.prototype.calcP = function () {
	return this.width * 2 + this.height * 2;
};
rect.prototype.calcA = function () {
	return this.width * this.height;
};
rect.prototype.dispInfo = function () {
	console.log("Width: " + this.width);
	console.log("Height: " + this.height);
	console.log("Area: " + this.calcA());
	console.log("Perimeter: " + this.calcP());
};
var r = new rect(3, 2);
console.log(r.calcA());
r.dispInfo();
