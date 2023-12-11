var xhrUsers = new XMLHttpRequest();
var btn = document.getElementById("a");
console.log(btn);
var div = document.getElementsByTagName("div")[0];
function getUsers() {
	xhrUsers.open("get", "https://jsonplaceholder.typicode.com/posts");
	xhrUsers.send();
}
btn.addEventListener("click", getUsers);
xhrUsers.addEventListener("readystatechange", function () {
	if (xhrUsers.readyState === 4) {
		if (xhrUsers.status === 200) {
			console.log(xhrUsers.response);
			var users = JSON.parse(xhrUsers.response);
			console.log(users);
			users.forEach(function (el) {
				// console.log(el);
				div.innerHTML +=
					"<h1>" + el.title + "</h1><p>" + el.body + "</p>";
			});
		}
	}
});
