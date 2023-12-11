var sum=0;
var flag =false;
do{
    var x=Number(prompt("enter a number"));
    if(isNaN(x)){
        alert("That wasn't a number!");
    }
    else{
        sum+=x;
    }
    
}while(x!=0 && sum<=100);
document.write("<h1>"+sum+"</h1>");