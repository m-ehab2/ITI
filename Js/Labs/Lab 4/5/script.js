var uString = prompt('enter the date in the format: (DD – MM – YYYY)');
function validate(x){
    if(x.length>10 || x.length<10){
        throw 'Length of string excedded'
    }
    if(x[2]!=='-'||x[5]!=='-'){
        throw 'wrong format'
    }
    return true;
}
function divide(x){
    var y=[]
    y.push(Number(x.substring(0,2)));
    y.push(Number(x.substring(3,5)));
    y.push(Number(x.substring(6,11)));
    return y;
}

try {
    validate(uString);
    var m=divide(uString);
    console.log(m);
    var z= new Date((m[2]),(m[1]-1),(m[0]));
    var days=['Sunday','Monday',`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
    alert(days[z.getDay()]);
} catch (error) {
    alert(error);
}