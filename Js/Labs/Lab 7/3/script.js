var img = document.getElementsByTagName("img");
var index = 0;
x = setInterval(function () {
	img[index].src = "pics/marble1.jpg";
	if (index === 10) {
		index = 0;
	} else {
		index++;
	}
	img[index].src = "pics/marble2.jpg";
}, 1000);
x;
var div = document.getElementsByClassName("hover")[0];
div.addEventListener("mouseover", function (e) {
	console.log("mouseover");
	clearInterval(x);
});
div.addEventListener("mouseleave", function (e) {
	x = setInterval(function () {
		img[index].src = "pics/marble1.jpg";
		if (index === 10) {
			index = 0;
		} else {
			index++;
		}
		img[index].src = "pics/marble2.jpg";
	}, 1000);
	x;
});
