var myDiv = document.getElementsByTagName("div")[0];
console.log(myDiv);
myDiv.addEventListener("click", function (e) {
	var r = Math.random() * 255;
	var g = Math.random() * 255;
	var b = Math.random() * 255;
	var newDiv = this.cloneNode();
	newDiv.innerHTML = "Newly created div";
	newDiv.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
	document.body.append(newDiv);
});
