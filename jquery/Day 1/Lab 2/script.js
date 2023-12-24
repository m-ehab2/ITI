console.log($("button"));
$("button").click(function () {
	console.log(this.innerHTML.split(" ")[1]);
	$("button").removeClass("Active");
	$(this).toggleClass("Active");
	$(".content").text("Content " + this.innerHTML.split(" ")[1]);
});
