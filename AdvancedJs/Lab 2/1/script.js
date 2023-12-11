function Rectangle(w, h) {
	this.width = w;
	this.height = h;
	Rectangle.count++;
}

Rectangle.prototype.CalcA = function () {
	return this.width * this.height;
};
Rectangle.prototype.calcP = function () {
	return this.width * 2 + this.height * 2;
};
Rectangle.prototype.toString = function () {
	alert(this.width, this.height, this.calcP, this.CalcA);
};
Rectangle.count = 0;
var r1 = new Rectangle(1, 2);
console.log(Rectangle.count);
var r2 = new Rectangle(3, 2);
console.log(Rectangle.count);
