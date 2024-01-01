function genByNumberOfElements(n) {
	var arr = [];
	for (let i = 0; i < n; i++) {
		if (i <= 1) {
			arr.push(i);
			// console.log(i);
			// console.log("------------");
		} else {
			// console.log(i);
			// console.log(arr[i - 1] + " + " + arr[i - 2]);
			// console.log(arr[i - 1] + arr[i - 2]);
			arr.push(arr[i - 1] + arr[i - 2]);
		}
	}
	return arr;
}
console.log(genByNumberOfElements(12));

function genByValue(n) {
	var arr = [];
	arr.push(0);
	var i = 1;
	while (arr[i - 1] < n) {
		// console.log("into");
		if (i <= 1) {
			arr.push(i);
			// console.log(i);
			// console.log("------------");
		} else {
			// console.log(i);
			// console.log(arr[i - 1] + " + " + arr[i - 2]);
			// console.log(arr[i - 1] + arr[i - 2]);
			arr.push(arr[i - 1] + arr[i - 2]);
		}
		i++;
	}
	arr.pop();
	return arr;
}
console.log(genByValue(34));
