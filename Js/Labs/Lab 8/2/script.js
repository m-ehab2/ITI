var sButt = document.getElementById("submit");
var inputs = document.getElementsByTagName("input");
var spans = document.getElementsByTagName("span");
var form = document.forms[0];
// form.addEventListener("submit", function (e) {
// 	alert("fired Event");
// 	validateName(e, inputs[0], spans[0]);
// });
sButt.addEventListener("click", function (e) {
	validateName(e, inputs[0], spans[0]);
	validateAddress(e, inputs[1], spans[1]);
	validateEmail(e, inputs[4], spans[3]);
	validateMobile(e, inputs[5], spans[4]);
});
function validateName(e, input, span) {
	if (input.value === "") {
		span.innerHTML = "This Field is required";
		e.preventDefault();
	} else if (isFinite(input.value)) {
		span.innerHTML = "Please Enter Characters";
		e.preventDefault();
	} else if (input.value.length < 3) {
		span.innerHTML = "Name should be longer than 2 characters";
		e.preventDefault();
	} else {
		span.innerHTML = "";
	}
}

function validateName(e, input, span) {
	if (input.value === "") {
		span.innerHTML = "This Field is required";
		e.preventDefault();
	} else if (isFinite(input.value)) {
		span.innerHTML = "Please Enter Characters";
		e.preventDefault();
	} else if (input.value.length < 3) {
		span.innerHTML = "Name should be longer than 2 characters";
		e.preventDefault();
	} else {
		span.innerHTML = "";
	}
}
function validateAddress(e, input, span) {
	if (input.value === "") {
		span.innerHTML = "This Field is required";
		e.preventDefault();
	} else if (input.value.length < 3) {
		span.innerHTML = "Address should be longer than 2 characters";
		e.preventDefault();
	} else {
		span.innerHTML = "";
	}
}
function validateEmail(e, input, span) {
	if (input.value === "") {
		e.preventDefault();
		span.innerHTML = "This Field is required";
	} else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value) === false) {
		e.preventDefault();
		span.innerHTML = "Wrong Email Format";
	} else {
		span.innerHTML = "";
	}
}
function validateMobile(e, input, span) {
	if (input.value === "") {
		e.preventDefault();
		span.innerHTML = "This Field is required";
	} else if (input.value.length != 11 || isNaN(input.value)) {
		e.preventDefault();
		span.innerHTML = "Wrong Mobile Format";
	} else {
		span.innerHTML = "";
	}
}
