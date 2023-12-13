let form = document.forms[0];
let table = document.createElement("table");
let color = document.getElementById("Color");
document.body.append(table);
form.addEventListener("submit", function (e) {
	e.preventDefault();
	buildSquares(form.Width.value, form.Height.value);
});
function buildSquares(x, y) {
	table.innerHTML = "";
	for (let index = 0; index < y; index++) {
		let row = document.createElement("tr");
		for (let indexX = 0; indexX < x; indexX++) {
			let td = document.createElement("td");
			td.addEventListener("click", function (e) {
				changecolor(e.target, color.value);
			});
			row.append(td);
		}
		table.append(row);
	}
}
function changecolor(el, color) {
	el.style.backgroundColor = color;
}
