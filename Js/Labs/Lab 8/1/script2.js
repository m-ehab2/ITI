var st = "this window will now close";
var count = 0;
var interval = setInterval(add, 300);
function add() {
	document.body.innerHTML += st[count];
	count++;
	if (count === st.length) {
		window.close();
	}
}
