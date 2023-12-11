var myinput = document.getElementsByTagName("input")[0];
myinput.addEventListener("keydown", function (e) {
	if (isNaN(e.key)) {
		e.preventDefault();
	}
});
