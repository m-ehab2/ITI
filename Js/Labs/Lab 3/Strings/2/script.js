do {
	var uString = prompt(
		"Enter the word you want to check for: - can`t include numbers-"
	);
} while (/[0-9]/.test(uString));
var count=0;
for (let index = 0; index < uString.length; index++) {
    if(uString[index]==='e'||uString[index]==='E'){
        count ++;
    }
}

document.write(`<h1>Your String has `+count +` 'e's in it</h1>`)