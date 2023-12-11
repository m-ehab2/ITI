var arr=[];
for (let index = 0; index < 5; index++) {
    do {
        var num = prompt(
            "Enter number "+(index+1)
        );
    } while (!/[0-9]/.test(num));
    arr[index]=Number(num); 
}
// do {
// 	var num1 = prompt(
// 		"Enter the first number"
// 	);
// } while (!/[0-9]/.test(num1));

// do {
// 	var num2 = prompt(
// 		"Enter the second number"
// 	);
// } while (!/[0-9]/.test(num2));

// do {
// 	var num3 = prompt(
// 		"Enter the third number"
// 	);
// } while (!/[0-9]/.test(num3));

// do {
// 	var num4 = prompt(
// 		"Enter the first number"
// 	);
// } while (!/[0-9]/.test(num4));

// do {
// 	var num5 = prompt(
// 		"Enter the second number"
// 	);
// } while (!/[0-9]/.test(num5));
// var arr=[Number(num1),Number(num2),Number(num3),Number(num4),Number(num5)];
document.write(`<h1>Your Array is:[`+arr[0]+` , `+arr[1]+` , `+arr[2]+` , `+arr[3]+` , `+arr[4]+`]</h1>`);
console.log(arr.sort((a, b) => a - b));
document.write(`<h1>Your Sorted Array is:[`+arr[0]+` , `+arr[1]+` , `+arr[2]+` , `+arr[3]+` , `+arr[4]+`]</h1>`);
console.log(arr.reverse());
document.write(`<h1>Your Reversed Sorted Array is: [`+arr[0]+` , `+arr[1]+` , `+arr[2]+` , `+arr[3]+` , `+arr[4]+`]</h1>`);
