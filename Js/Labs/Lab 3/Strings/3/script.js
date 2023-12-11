// do {
// 	var fName = prompt("Enter Your Name: - can`t include numbers-");
// } while (/[0-9]/.test(fName));

// do {
// 	var pNumber = prompt("Enter Your Phone Number: - has to be eight digits -");
// } while (pNumber.length != 8);

// do {
// 	var mNumber = prompt(
// 		"Enter Your Mobile Number: - has to be eleven digits and starts with (011 or 010 or 012) -"
// 	);
// 	// console.log(mNumber.substring(0,3));
// } while (
// 	!(/^(010|011|012)[0-9]{8}/).test(mNumber)
// 	// !(mNumber.substring(0, 3) === "011" ||
// 	// 	mNumber.substring(0, 3) === "012" ||
// 	// 	mNumber.substring(0, 3) === "010")
// );
do {
	var mNumber = prompt(
		"Enter Your Mobile Number: - has to be eleven digits and starts with (011 or 010 or 012) -"
	);
    // console.log(mNumber.substring(0,3));
} while (
	
	 mNumber.length != 11 &&(mNumber.substring(0, 3)!== "011" ||mNumber.substring(0, 3) !== "012"||	mNumber.substring(0, 3) !== "010") &&/[0-9]/.test(mNumber)
	// !(mNumber.substring(0, 3) === "011" ||
	// 	mNumber.substring(0, 3) === "012" ||
	// 	mNumber.substring(0, 3) === "010")
);

// do {
// 	var mail = prompt("Enter Your E-Mail: - has to be a valid e-mail -");
// } while (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail));

// document.write(`<h1>Welcome ` + fName + ` </h1>`);
// document.write(`<h1>Phone Number is ` + pNumber + ` </h1>`);
// document.write(`<h1>Mobile Number is ` + mNumber + ` </h1>`);
// document.write(`<h1> E-mail is ` + mail + ` </h1>`);
