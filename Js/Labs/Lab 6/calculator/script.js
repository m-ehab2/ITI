var screen = document.getElementById("Answer");

function EnterNumber(e) {
	screen.value += e;
}
function EnterOperator(e) {
	screen.value += e;
}
function EnterClear(e) {
	screen.value = "";
}
function EnterEqual() {
	var result = eval(screen.value);
	screen.value = result;
}
