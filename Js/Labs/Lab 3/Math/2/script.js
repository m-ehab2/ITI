do {
	var uString = prompt(
		"Enter the number"
	);
} while (!/[0-9]/.test(uString));
window.alert(`square root is `+Math.sqrt(Number(uString)));