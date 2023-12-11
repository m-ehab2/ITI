function swap(a, b) {
	// console.log(a, b);
	[a, b] = [b, a];
	// console.log(a, b);
	return [a, b];
}
let a = 10;
let b = 5;
console.log(a, b);
[a, b] = swap(a, b);
console.log(a, b);
