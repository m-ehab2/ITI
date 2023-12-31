let data = new Promise(function (resolve, reject) {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to retrieve User Data");
			}
			return response.json();
		})
		.then((users) => {
			resolve(users);
		})
		.catch((error) => {
			reject(error);
		});
});

data.then(function (data) {
	console.log(data);
	data.forEach((element) => {
		$(".tabs").append(`<div id=${element.id}>${element.name}</div>`);
	});
	$(".tabs div").click(async function (e) {
		$(".content").html("");
		$(".tabs div").removeClass("clicked");
		$(e.target).toggleClass("clicked");
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!response.ok) {
				throw new Error("Failed to retreive post data");
			}
			const data = await response.json();
			data.forEach((element) => {
				if (element.userId === Number($(e.target).attr("id"))) {
					$(".content").append(
						`<div ${element.id}><h1>${element.title}</h1><p>${element.body}</p></div>`
					);
				}
			});
		} catch (error) {
			$(".content").append(
				`<h1 style='color:red;font-size:larger'>${error}</h1>`
			);
		}
	});
}).catch(function (error) {
	console.error("Error:", error);
	$(".tabs").append(`<h1 style='color:red;font-size:larger'>${error}</h1>`);
});

// $.get("https://jsonplaceholder.typicode.com/users", function (data) {
// 	console.log(data);
// 	data.forEach((element) => {
// 		$(".tabs").append(`<div id=${element.id}>${element.name}</div>`);
// 	});
// 	$(".tabs div").click(function (e) {
// 		// console.log("hh");
// 		$(".content").html("");
// 		$(".tabs div").removeClass("clicked");
// 		$(e.target).toggleClass("clicked");
// 		$.get("https://jsonplaceholder.typicode.com/posts", function (data) {
// 			data.forEach((element) => {
// 				if (element.userId === Number($(e.target).attr("id"))) {
// 					$(".content").append(
// 						`<div ${element.id}><h1>${element.title}</h1><p>${element.body}</p></div> `
// 					);
// 				}
// 			});
// 		});
// 	});
// });
