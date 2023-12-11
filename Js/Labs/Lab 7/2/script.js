var clear = document.getElementsByTagName("button")[0];
var previous = document.getElementsByTagName("button")[1];
var next = document.getElementsByTagName("button")[2];
var slideshow = document.getElementsByTagName("button")[3];
var arr_img = [
	"pics/1.jpg",
	"pics/2.jpg",
	"pics/3.jpg",
	"pics/4.jpg",
	"pics/5.jpg",
	"pics/6.jpg",
];
var currentIndex = 0;
var img = document.getElementsByTagName("img")[0];
previous.addEventListener("click", function (e) {
	if (currentIndex != 0) {
		currentIndex--;
		img.src = arr_img[currentIndex];
	} else {
	}
});
next.addEventListener("click", function (e) {
	if (currentIndex != 5) {
		currentIndex++;
		img.src = arr_img[currentIndex];
	}
});
var x;
slideshow.addEventListener("click", function (e) {
	x = setInterval(function () {
		if (currentIndex === 5) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		img.src = arr_img[currentIndex];
	}, 2000);
});
clear.addEventListener("click", function (e) {
	clearInterval(x);
});
