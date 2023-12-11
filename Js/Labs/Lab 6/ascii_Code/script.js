window.addEventListener("keydown", function (e) {
	console.log(e);
	if (e.shiftKey) {
		this.alert("shift key is pressed");
	} else if (e.altKey) {
		this.alert("alt key is pressed");
	} else if (e.ctrlKey) {
		this.alert("ctrl key is pressed");
	} else {
		this.alert(e.keyCode);
	}
});
