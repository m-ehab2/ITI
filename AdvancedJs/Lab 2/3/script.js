function Box(h, w, l, m) {
	this.content = [];
	this.height = h;
	this.width = w;
	this.length = l;
	this.numOfBooks = this.content.length;
	this.volume = this.height * this.width * this.length;
	this.material = m;
}
Box.prototype.toString = function () {
	console.log(
		"Height= " +
			this.height +
			" width= " +
			this.width +
			" length= " +
			this.length +
			" number of books= " +
			this.content.length
	);
};
Box.prototype.numofBooks = function () {
	return this.content.length;
};
Box.prototype.insert = function (b) {
	this.content.push(b);
};
Box.valueOf = function () {
	var sum = 0;
	for (let index = 0; index < arguments.length; index++) {
		sum += arguments[index].numOfBooks;
	}
	return sum;
};
function valueof() {
	var sum = 0;
	for (let index = 0; index < arguments.length; index++) {
		sum += arguments[index].numOfBooks;
	}
	return sum;
}
function Book(t, n, a, noP, pu, nCo) {
	this.title = t;
	this.numofChapters = n;
	this.author = a;
	this.numofPages = noP;
	this.publisher = pu;
	this.numofCopies = nCo;
}
var b1 = new Box(2, 2, 3, "wood");
var book1 = new Book(1, 1, 1, 1, 1, 1);
b1.insert(book1);

b1.toString();
b1.insert(book1);
b1.toString();
