var but = document.getElementsByTagName("button")[0];
var inp = document.getElementsByTagName("input")[0];
console.log(inp.type);
but.addEventListener("click", function (e) {
	if (inp.type === "password") {
		but.innerText = `opened Eye`;
		inp.type = "text";
	} else if (inp.type === "text") {
		but.innerText = `closed Eye`;
		inp.type = "password";
	}
});
