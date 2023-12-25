var form = document.forms[0];
function User(userName, age, gender, color) {
	this.user = userName;
	this.age = age;
	this.gender = gender;
	this.color = color;
	this.count = 1;
}
document.forms[0].addEventListener("submit", function (e) {
	var inputs = document.getElementsByTagName("input");
	var select = document.getElementsByTagName("select")[0];
	var user = new User(
		inputs[0].value,
		inputs[1].value,
		inputs[2].checked ? "male" : "female",
		select.value
	);
	if (hasCookie(inputs[0].value)) {
		var coo = getCookie(inputs[0].value);
		var obj = JSON.parse(coo);
		obj.count++;
		createCookie(inputs[0].value, JSON.stringify(obj));
	} else {
		createCookie(inputs[0].value, JSON.stringify(user));
	}
});
