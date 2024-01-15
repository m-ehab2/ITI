const { log } = require('console');
const fs = require('fs');
const path = require('path');
const mypath = path.join(__dirname, 'products.json');
const mytext = fs.readFileSync(mypath, 'utf-8');
const myObj = JSON.parse(mytext);

//Adding Feature for Every element
myObj.forEach(element => {
    element.feature = true;
});
fs.writeFileSync('mypath', JSON.stringify(myObj, null, 2))
//Getting Highest Priced Element
function getMaxPrice(obj) {
    let maxPrice = 0;
    let maxPriceOBJ;
    obj.forEach((e) => {
        if (e.productPrice > maxPrice) {
            maxPrice = e.productPrice;
            maxPriceOBJ = e;
        }
    })
    console.log('Max Price Object Is');
    return maxPriceOBJ;
}
console.log(getMaxPrice(myObj));

//Filter the Products by Company
function filterByComp(companyName, obj) {
    let filteredElements = [];
    obj.forEach((e) => {
        if (e.company === companyName) {
            filteredElements.push(e);
        }
    })
    if (filteredElements.length) {
        return filteredElements;
    }
    else {
        return 'No Matching Elements';
    }
}
console.log(filterByComp('liddy', myObj));
console.log(myObj);