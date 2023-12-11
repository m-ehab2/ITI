var bs = document.getElementsByTagName("b");
var url = window.location.href;
// console.log(window.location);
var loc = new URLSearchParams(window.location.search);
// console.log(loc);
var params = new URLSearchParams(url);
// console.log(params);
for (const [key, value] of loc) {
	console.log(key);
}
// console.log(window);
var count = 0;
for (const [key, value] of params) {
	bs[count].innerHTML = value;
	count++;
}
