function author(name, email) {
	this.name = name;
	this.email = email;
}
function book(name, price, author) {
	this.name = name;
	this.price = price;
	this.author = author;
}
var a1 = new author("john", "asdad");
var b1 = new book("John", 50, a1);
var form1 = document.forms[0];
var inNumofBooks = document.getElementsByTagName("input")[0];
var numofBooks;
var form2 = document.forms[1];
form1.addEventListener("submit", function (e) {
	e.preventDefault();
	if (inNumofBooks.value !== "") {
		numofBooks = Number(inNumofBooks.value);
		form1.style.display = "none";
		form2.style.display = "flex";
		console.log(numofBooks);
	}
});
var spansF2 = form2.getElementsByTagName("span");
var inputsF2 = form2.getElementsByTagName("input");
function validateEmail(e, input, span) {
	if (input.value === "") {
		e.preventDefault();
		span.innerHTML = "This Field is required";
	} else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value) === false) {
		e.preventDefault();
		span.innerHTML = "Wrong Email Format";
		return false;
	} else {
		span.innerHTML = "";
		return true;
	}
}
function validateName(e, input, span) {
	if (input.value === "") {
		span.innerHTML = "This Field is required";
		e.preventDefault();
		return false;
	} else if (isFinite(input.value)) {
		span.innerHTML = "Please Enter Characters";
		e.preventDefault();
		return false;
	} else if (input.value.length < 3) {
		span.innerHTML = "Name should be longer than 2 characters";
		e.preventDefault();
		return false;
	} else {
		span.innerHTML = "";
		return true;
	}
}
function validatePrice(e, input, span) {
	if (input.value === "") {
		e.preventDefault();
		span.innerHTML = "This Field is required";
		return false;
	} else if (isNaN(input.value)) {
		e.preventDefault();
		span.innerHTML = "Wrong Price Format";
		return false;
	} else {
		span.innerHTML = "";
		return true;
	}
}

function validateform(e, inputs, spans) {
	var n = validateName(e, inputs[0], spans[0]);
	var p = validatePrice(e, inputs[1], spans[1]);
	var an = validateName(e, inputs[2], spans[2]);
	var em = validateEmail(e, inputs[3], spans[3]);
	return n && p && an && em;
}
function clearValue(inputs) {
	for (let index = 0; index < inputs.length - 1; index++) {
		inputs[index].value = "";
	}
}
var lib = [];
var table = document.getElementsByTagName("table")[0];
var buttons;
form2.addEventListener("submit", function (e) {
	e.preventDefault();
	// console.log(spansF2);
	// console.log(inputsF2);
	var cond = validateform(e, inputsF2, spansF2);
	if (cond === true) {
		var a2 = new author(inputsF2[2].value, inputsF2[3].value);
		var b2 = new book(inputsF2[0].value, inputsF2[1].value, a2);
		console.log(b2);
		lib.push(b2);
		clearValue(inputsF2);
		console.log(lib);
		console.log(lib.length);
	}
	if (lib.length === numofBooks) {
		console.log("condition reached");
		form2.style.display = "none";
		table.style.display = "block";
		buildTable(lib, table);
		buttons = table.getElementsByTagName("button");
		// addlis(buttons);
	}
});
function removeE(index, array) {
	return array.splice(index, 1);
}
function buildTable(arr, tab) {
	var n = 0;
	console.log(tab.getElementsByTagName("tbody")[0]);
	table.getElementsByTagName("tbody")[0].innerHTML = "";
	arr.forEach((element) => {
		var r = document.createElement("tr");
		var c1 = document.createElement("td");
		var c2 = document.createElement("td");
		var c3 = document.createElement("td");
		var c4 = document.createElement("td");
		var c5 = document.createElement("td");
		var c6 = document.createElement("td");
		var b1 = document.createElement("button");
		b1.innerHTML = "Edit";
		b1.id = n;
		b1.addEventListener("click", edit);
		c5.append(b1);
		var b2 = document.createElement("button");
		b2.innerHTML = "Remove";
		b2.id = n;
		b2.addEventListener("click", rem);
		c6.append(b2);
		c1.innerHTML = element.name;
		c2.innerHTML = element.price;
		c3.innerHTML = element.author.name;
		c4.innerHTML = element.author.email;
		r.append(c1, c2, c3, c4, c5, c6);
		tab.getElementsByTagName("tbody")[0].append(r);
		n++;
	});
}
function getParent(el) {
	return el.parentNode;
}
function rem(e) {
	console.log(lib);
	lib.splice(Number(this.id), 1);
	console.log(lib);
	buildTable(lib, table);
}
function edit(e) {
	// console.log(this.id);
	// console.log(lib[Number(this.id)]);
	var myRow = table
		.getElementsByTagName("tbody")[0]
		.getElementsByTagName("tr")[Number(this.id)];
	// console.log(myRow);
	var columns = myRow.getElementsByTagName("td");
	for (let index = 0; index < 4; index++) {
		columns[
			index
		].innerHTML = `<input type="text" name="" /><br><span></span>`;
	}
	//Getting Input Values
	var nameInput = columns[0].getElementsByTagName("input")[0];
	var priceInput = columns[1].getElementsByTagName("input")[0];
	var authorNameInput = columns[2].getElementsByTagName("input")[0];
	var authorEmailInput = columns[3].getElementsByTagName("input")[0];
	//Getting Span Elements for errors in validation
	var nameSpan = columns[0].getElementsByTagName("span")[0];
	var priceSpan = columns[1].getElementsByTagName("span")[0];
	var authorNameSpan = columns[2].getElementsByTagName("span")[0];
	var authorEmailSpan = columns[3].getElementsByTagName("span")[0];
	//Replacing Empty Inputs with default Values
	nameInput.value = lib[Number(this.id)].name;
	priceInput.value = lib[Number(this.id)].price;
	authorNameInput.value = lib[Number(this.id)].author.name;
	authorEmailInput.value = lib[Number(this.id)].author.email;
	var saveBtn = document.createElement("button");
	saveBtn.innerHTML = "Save";

	saveBtn.addEventListener("click", function (e) {
		var inputsEdit = [
			nameInput,
			priceInput,
			authorNameInput,
			authorEmailInput,
		];
		var spansEdit = [nameSpan, priceSpan, authorNameSpan, authorEmailSpan];
		var cond = validateform(e, inputsEdit, spansEdit);
		if (cond) {
			editArrElement(
				Number(this.id),
				nameInput.value,
				priceInput.value,
				authorNameInput.value,
				authorEmailInput.value
			);
			buildTable(lib, table);
		}
	});
	var cancelBtn = document.createElement("button");
	cancelBtn.addEventListener("click", function (e) {
		buildTable(lib, table);
	});
	cancelBtn.innerHTML = "Cancel";
	columns[4].innerHTML = "";
	columns[4].appendChild(saveBtn);
	columns[5].innerHTML = "";
	columns[5].appendChild(cancelBtn);
}
function editArrElement(index, bName, bPrice, aName, aEmail) {
	lib[index].name = bName;
	lib[index].price = bPrice;
	lib[index].author.name = aName;
	lib[index].author.email = aEmail;
	console.log(lib);
}
function clearInnerHtml(element) {
	console.log(element);
	element.innerHTML = "";
}
function clicked() {
	console.log(this);
}
