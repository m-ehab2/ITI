function dualInput(a,b){
    if(arguments.length != 2){
        throw 'Less than two numbers';
    }
    return true;
}
console.log(dualInput(1,2));
console.log(dualInput(1,2,3));
