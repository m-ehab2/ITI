alert('welcome to my site!')
var x=prompt('Enter Your Name');

var c=prompt('enter a color(it has to be red, green or blue');
if(c!='red' && c!='blue' && c!='green'){
    alert('wrong color')
}
else{
    document.write(`<h1 style=`+`"color:`+c+`"`+`>Welcome`+x+`</h1>`)
}