const fs = require('fs');
const path = require('path');
const mypath = path.join(__dirname, 'mytext.txt');
const mytext = fs.readFileSync(mypath, 'utf-8');
console.log(mytext);
fs.writeFileSync(mypath, '\nHello World', {
    flag: "a"
})
const mytextAfterediting = fs.readFileSync(mypath, 'utf-8');
console.log(mytextAfterediting);