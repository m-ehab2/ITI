var form = document.forms[0];
var sButt = document.getElementById("submit");
var inputs = document.getElementsByTagName("input");

function myform(event) {
	console.log(inputs[0].value);
	name_validation(event);
	age();
	event.preventDefault();
	//ba2ee el validation functions
}
function name_validation() {
	//el validation function
	console.log("validation");
}
function age() {
	//el validation function
	console.log("age validation");
}
form.addEventListener("submit", myform);

// var sButt = document.getElementById("submit");
// var inputs = document.getElementsByTagName("input");
// var spans = document.getElementsByTagName("span");
// var user_arr = [];
// var correct = [];
// sButt.addEventListener("click", function (e) {
// 	if (inputs[0].value === "") {
// 		spans[0].innerHTML = "This Field is required";
// 		e.preventDefault();
// 		inputs[0].value = "";
// 	} else if (isFinite(inputs[0].value)) {
// 		spans[0].innerHTML = "Please Enter Characters";
// 		e.preventDefault();
// 		inputs[0].value = "";
// 	} else {
// 		e.preventDefault();
// 		spans[0].innerHTML = "";
// 		user_arr[0] = inputs[0].value;
// 		inputs[0].value = "";
// 	}
// 	if (inputs[1].value === "") {
// 		spans[1].innerHTML = "This Field is required";
// 		inputs[1].value = "";
// 	} else if (isNaN(inputs[1].value)) {
// 		spans[1].innerHTML = "Please Enter A number";
// 		e.preventDefault();
// 		inputs[1].value = "";
// 	} else {
// 		e.preventDefault();
// 		spans[1].innerHTML = "";
// 		user_arr[1] = inputs[1].value;
// 		inputs[1].value = "";
// 	}
// 	if (inputs[2].value === "") {
// 		e.preventDefault();
// 		spans[2].innerHTML = "This Field is required";
// 	} else if (
// 		/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs[2].value) === false
// 	) {
// 		e.preventDefault();
// 		spans[2].innerHTML = "Wrong Email Format";
// 		inputs[2].value = "";
// 	} else {
// 		e.preventDefault();
// 		spans[2].innerHTML = "";
// 		user_arr[2] = inputs[2].value;
// 		inputs[2].value = "";
// 	}
// 	if (
// 		user_arr[0] != undefined &&
// 		user_arr[1] != undefined &&
// 		user_arr[2] != undefined
// 	) {
// 		addToTable(user_arr);
// 		user_arr = [];
// 	}
// });
// var table = document.getElementsByTagName("table")[0];
// function addToTable(arr) {
// 	var row = document.getElementsByTagName("tr")[0].cloneNode(true);
// 	row.children[0].innerHTML = arr[0];
// 	row.children[1].innerHTML = arr[1];
// 	row.children[2].innerHTML = arr[2];
// 	table.append(row);
// }
