function sum(a){
    var x=0;
    for (let index = 0; index < arguments.length; index++) {
        if(typeof arguments[index] !== 'number'){
            throw 'entered a non number'
        }
        x += arguments[index];
    }
    return x
}
console.log(sum(1,2,5));