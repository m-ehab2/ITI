var arr=[];
for (let index = 0; index < 3; index++) {
    do {
        var num = prompt(
            "Enter number "+(index+1)
        );
    } while (!/[0-9]/.test(num));
    arr[index]=Number(num); 
}
document.write(`<h1>Adding - Multiplying - Dividing 3 values</h1>`);
document.write(`<hr>`)
document.write(`<h3> Sum :`+arr[0]+`+`+arr[1]+`+`+arr[2]+`=`+(arr[0]+arr[1]+arr[2])+`</h3>`);
document.write(`<h3> Multiplication:`+arr[0]+`*`+arr[1]+`*`+arr[2]+`=`+arr[0]*arr[1]*arr[2]+`</h3>`);
document.write(`<h3> Division::`+arr[0]+`/`+arr[1]+`/`+arr[2]+`=`+arr[0]/arr[1]/arr[2]+`</h3>`);
