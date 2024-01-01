var obj = {
	name: "mai",
	age: 22,
	[Symbol.iterator]: objIterator,
};

var res = obj[Symbol.iterator]();
function objIterator() {
	var keys = Object.keys(this);
	var counter = -1;
	var self = this;
	return {
		next: () => {
			counter++;
			if (counter < keys.length) {
				return {
					value: [keys[counter], self[keys[counter]]],
					done: false,
				};
			} else {
				return {
					value: undefined,
					done: true,
				};
			}
		},
	};
}

for (var iterator of obj) {
	console.log(iterator);
}
