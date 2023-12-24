var elements = document.getElementsByClassName("color");
let params = new URL(document.location).searchParams;
let namee = params.get("uName");
console.log(namee);
let x = JSON.parse(getCookie(namee));
console.log(x);
for (let index = 0; index < elements.length; index++) {
	elements[index].style.color = x.color;
}
var uName = document.getElementById("userName");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var count = document.getElementById("count");
console.log(uName);
uName.innerHTML = "Welcome, " + x.user;
age.innerHTML = "your age is " + x.age;
gender.innerHTML = "your gender is " + x.gender;
count.innerHTML = "you visited us " + x.count + " times";
