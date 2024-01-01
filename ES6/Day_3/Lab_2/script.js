class Object {
	constructor(name, address, age) {
		this.name = name;
		this.address = address;
		this.age = age;
	}
}
let handler = {
	set: function (target, prop, value) {
		// console.log(target, prop, value);
		if (
			prop === "name" &&
			typeof value === "string" &&
			value.length === 7
		) {
			// console.log("entered name " + value);
			target[prop] = value;
		} else if (prop === "address" && typeof value === "string") {
			target[prop] = value;
		} else if (
			prop === "age" &&
			typeof value === "number" &&
			value >= 25 &&
			value <= 60
		) {
			target[prop] = value;
		} else {
			throw `Invalid value for property '${prop}'`;
		}
	},
};

let ob1 = new Object();
let p1 = new Proxy(ob1, handler);
p1.name = "assssss";
p1.address = "Ismailia";
p1.age = 27;
console.log(p1, ob1);
