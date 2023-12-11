do {
	var numP = window.prompt("Enter The number of people");
} while (isNaN(numP));
var names = [];
var ages = [];
for (let index = 0; index < Number(numP); index++) {
	do {
		var n = prompt("Enter Name " + (index + 1));
	} while (/[0-9]/.test(n));
	do {
		var a = prompt(`Enter Age ` + (index + 1));
	} while (isNaN(a));
	names.push(n);
	ages.push(a);
}
console.log(names, ages);
var table = document.createElement("table");
var thead = document.createElement("tr");
var colh1 = document.createElement("th");
colh1.innerHTML = "Name";
var colh2 = document.createElement("th");
colh2.innerHTML = "age";
thead.append(colh1);
thead.append(colh2);
table.append(thead);
document.body.append(table);

for (let index = 0; index < Number(numP); index++) {
	var tr_i = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	td1.innerHTML = names[index];
	td2.innerHTML = ages[index];
	tr_i.append(td1);
	tr_i.append(td2);
	table.append(tr_i);
}
table.setAttribute("class", "table");
