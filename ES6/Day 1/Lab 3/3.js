var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let condString = (value) => typeof value === "string";
function isAString(arr) {
	return arr.every(condString);
}
console.log(isAString(fruits));
function startsWith(arr, char) {
	let count = 0;
	arr.forEach((element) => {
		if (element[0].charAt(0) === char) {
			count++;
		}
	});
	return count;
}
console.log(startsWith(fruits, "a"));
function someStartWtih(arr, char) {
	return arr.some((el) => el[0] === char);
}
console.log(someStartWtih(fruits, "z"));
function getArrayStartingWith(arr, char) {
	let m = arr.filter((element) => element.charAt(0) === char);
	return m;
}
console.log(getArrayStartingWith(fruits, "a"));
function addWords(arr, words) {
	let m = arr.map((x) => (x = words + x));
	return m;
}
console.log(addWords(fruits, "I Like "));
function dispItems(arr) {
	arr.array.forEach((element) => {
		console.log(element);
	});
}
