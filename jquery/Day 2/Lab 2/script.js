$.get("https://jsonplaceholder.typicode.com/users", function (data) {
	console.log(data);
	data.forEach((element) => {
		$(".tabs").append(`<div id=${element.id}>${element.name}</div>`);
	});
	$(".tabs div").click(function (e) {
		// console.log("hh");
		$(".content").html("");
		$(".tabs div").removeClass("clicked");
		$(e.target).toggleClass("clicked");
		$.get("https://jsonplaceholder.typicode.com/posts", function (data) {
			data.forEach((element) => {
				if (element.userId === Number($(e.target).attr("id"))) {
					$(".content").append(
						`<div ${element.id}><h1>${element.title}</h1><p>${element.body}</p></div> `
					);
				}
			});
		});
	});
});
