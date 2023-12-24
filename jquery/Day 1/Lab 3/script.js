$("form").submit(function (e) {
	e.preventDefault();
	console.log($("input").val());
	$("body").append(
		`<div class='todo'> <h3> ${$(
			"input"
		).val()} </h3> <button class='del'> x </button>`
	);
	$(".del").click(function (e) {
		$(this).parent().remove();
	});
});
