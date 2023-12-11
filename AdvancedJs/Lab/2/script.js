function genObj() {
	this.name = "as";
}

function obj() {
	this.callSelf = function () {
		return this;
	};
}

genObj.prototype.getSetGen = function () {
	var self = this;
	for (key in self) {
		// console.log(key);
		if (typeof self[key] !== "function") {
			// console.log(key);
			(function (prop) {
				Object.defineProperty(self, key, {
					get: function () {
						// console.log("get:" + self[key]);
						return prop;
					},
					set: function (val) {
						// console.log("set " + prop + " " + val);

						prop = val;
					},
				});
			})(self[key]);
		}
	}
};

var ob = {
	cr: "as",
	id: 12,
	func: function () {
		console.log("asas");
	},
};

var gen = new genObj();
debugger;
var y = gen.name;
// debugger;
var o1 = new obj();
var x = o1.callSelf();
gen.getSetGen();
console.log(gen.name);
gen.getSetGen.call(ob);
ob.cr = "home";
// ob.id = 15;
// gen.name = "asdasd";
console.log(ob);
