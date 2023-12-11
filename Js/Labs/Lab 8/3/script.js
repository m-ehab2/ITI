var rect = {
	height: 0,
	width: 0,
	con: function (h, w) {
		this.height = h;
		this.width = w;
	},
	cArea: function () {
		return this.height * this.width;
	},
	cPer: function () {
		return (this.height + this.width) * 2;
	},
	displayInfo: function () {
		console.log(this.cArea(), this.cPer(), this.height, this.width);
	},
};

rect.con(3, 3);
console.log(rect.cArea());
console.log(rect.cPer());
