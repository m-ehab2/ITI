function createCookie(key, value) {
	document.cookie = `${key}=${value}`;
	console.log(key + " Cookie Created");
}
function getCookie(key) {
	var arr = document.cookie.split("; ");
	var found = false;
	arr.forEach((element) => {
		var split = element.split("=");
		if (split[0] === key) {
			found = split[1];
		}
	});
	console.log("returned" + found);
	return found;
}
function deleteCookie(key) {
	document.cookie = `${key}=''; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
	console.log("deleted " + key);
}
function allCookieList() {
	var arr = document.cookie.split("; ");
	return arr;
}
function hasCookie(key) {
	var arr = document.cookie.split("; ");
	var found = false;
	arr.forEach((element) => {
		var split = element.split("=");
		if (split[0] === key) {
			found = true;
		}
	});
	return found;
}
