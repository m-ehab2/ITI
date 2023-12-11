var butt = document.getElementsByTagName("button")[0];
console.log(window.location);
butt.addEventListener("click", function (e) {
	var c = window.open("", "", "width=400,height=300,top=200,left=200");
	setTimeout(function () {
		c.close();
	}, 5000);
});

// var butt = document.getElementsByTagName("button")[0];
// butt.addEventListener("click", function (e) {
// 	var c = window.open(
// 		"page2.html",
// 		"",
// 		"width=400,height=300,top=200,left=200"
// 	);
// 	// setTimeout(function () {
// 	// 	c.close();
// 	// }, 5000);
// });
