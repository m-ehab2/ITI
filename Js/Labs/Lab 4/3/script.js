function sum(a){
    var x=[];
    for (let index = 0; index < arguments.length; index++) {
        x.push(arguments[index]);
    }
    x.reverse();
    return x
}
console.log(sum('a',2,5));