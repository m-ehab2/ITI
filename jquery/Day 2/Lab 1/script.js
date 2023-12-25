let picsArr = [
	"./pics/dave-hoefler-lsoogGC_5dg-unsplash.jpg",
	"./pics/goutham-krishna-h5wvMCdOV3w-unsplash.jpg",
	"./pics/sapan-patel-i9Q9bc-WgfE-unsplash.jpg",
	"./pics/shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg",
];
var selectedID;
var index;
$(".imgout").click(function () {
	selectedID = Number($(this).attr("id"));
	$(".img5").css("background-image", `url(${picsArr[selectedID - 1]})`);
	$(".carasoul").css("display", "flex");
	index = selectedID - 1;
});
$(".next").click(function () {
	index++;
	if (index === 4) {
		index = 0;
	} else if (index === -1) {
		index = 3;
	}
	$(".img5").css("background-image", `url(${picsArr[index]})`);
});
$(".previous").click(function () {
	index--;
	if (index === 4) {
		index = 0;
	} else if (index === -1) {
		index = 3;
	}
	$(".img5").css("background-image", `url(${picsArr[index]})`);
});
$(".carasoul").click(function (e) {
	console.log(e.target);
	if ($(e.target).attr("class") === "carasoul") {
		console.log("c");
		$(e.target).css("display", "none");
	}
});
