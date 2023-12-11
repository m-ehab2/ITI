do {
	var uString = prompt(
		"Enter the word you want to check for: - can`t include numbers-"
	);
} while (/[0-9]/.test(uString));

var caps = confirm("Would you like to include letter cases in the test?");

var z = uString.split("");

z = z.reverse();
z = z.join("");
console.log(z);
if (caps) {
	if (z === uString) {
		document.write(`<h1>Your word ` + uString + ` is a palindrome</h1.`);
	} else {
		document.write(`<h1>Your word ` + uString + ` is not a palindrome</h1.`);
	}
} else {
	z = z.toLowerCase();
    console.log(z);
	if (z === uString.toLowerCase()) {
		document.write(`<h1>Your word ` + uString + ` is a palindrome</h1.`);
	} else {
		document.write(`<h1>Your word ` + uString + ` is not a palindrome</h1.`);
	}
}
