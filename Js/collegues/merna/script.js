var myName = document.getElementById("nAme");
var myForm = document.getElementsByClassName("myform")[0];
var submit = document.getElementById("btn");
var text = document.getElementsByClassName("txt")[0];
var myage = document.getElementById("age");
var text2 = document.getElementsByClassName("txt2")[0];
var mymail = document.getElementById("mail");
var text3 = document.getElementsByClassName("txt3")[0];
var tbody = document.getElementsByTagName("tbody")[0];
var form = document.getElementsByTagName("form")[0];
console.log(form);
function name_validation(event) {
	console.log(myName.value);
	var myNv = myName.value;
	if (myNv == "") {
		text.innerHTML = "This field is required";
	} else if (isFinite(myNv)) {
		text.innerHTML = "Please enter strings only";
	} else if (myNv.length < 3) {
		text.innerHTML = "please enter valid name";
	} else {
		console.log(myNv);
	}
}
function number_validation(event) {
	console.log(myage.value);
	var myAg = myage.value;

	if (isNaN(myAg)) {
		text2.innerHTML = "Please enter numbers only";
	} else if (myAg == "") {
		text2.innerHTML = "This field is required";
	} else if (myAg < 10 || myAg > 60) {
		text2.innerHTML = "This age is not a valid age to use the form";
	} else {
		console.log(myAg);
	}
}
function mail_validation(event) {
	console.log(mymail.value);
	var myMV = mymail.value;
	var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var mail_test = mail.test(myMV);

	if (mail_test) {
		console.log(myMV);
	} else if (myMV == "") {
		text3.innerHTML = "This field is required";
	} else {
		text3.innerHTML = "please enter valid mail";
	}
	console.log(mail_validation);
}

function myform(event) {
	name_validation();
	number_validation();
	mail_validation();
	event.preventDefault();
}
form.addEventListener(submit, myform);
console.log(myform);
// var trr= document.createElement("tr");
// var t_row=trr.innerHTML+= "<td>" + name_validation()+"</td><td>"+number_validation()+"</td><td>"+mail_validation()+"</td>";
// tbody.append(t_row);
