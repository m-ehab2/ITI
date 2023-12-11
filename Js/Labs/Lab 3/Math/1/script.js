do {
	var uString = prompt(
		"Enter the radius-"
	);
} while (!/[0-9]/.test(uString));
window.alert(`Area is`+Math.PI*Math.pow(Number(uString),2))