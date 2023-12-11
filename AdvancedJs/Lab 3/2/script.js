var slct = document.getElementsByTagName("select")[0];
var slct1 = document.getElementsByTagName("select")[1];

var xhrUsers = new XMLHttpRequest();
console.log(slct);
slct.addEventListener("change", getData);
function getData() {
	console.log(slct.value);
	xhrUsers.open("get", "./rockbands.json");
	xhrUsers.send();
	slct1.style.display = "inline";
}
xhrUsers.addEventListener("readystatechange", function () {
	if (xhrUsers.readyState === 4) {
		if (xhrUsers.status === 200) {
			var users = JSON.parse(xhrUsers.response);
			for (var key in users) {
				// console.log(key);
				// console.log(slct.value);
				if (key === slct.value) {
					// console.log("found");
					slct1.innerHTML = "";
					users[key].forEach((element) => {
						console.log(element);
						var opt = document.createElement("option");
						opt.innerHTML = element.name;
						opt.value = element.value;
						slct1.append(opt);
					});
					slct1.addEventListener("change", function () {
						window.open(slct1.value);
					});
				}
			}
		}
	}
});
