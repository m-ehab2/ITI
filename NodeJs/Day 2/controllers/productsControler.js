const { log } = require("console");
const { readFile, writeFile, readFileSync, writeFileSync } = require("fs");
const path = require('path');
const filepath = path.join(__dirname, '..', 'products.json')

const getProducts = function (req, res) {
  let z = JSON.parse(readFileSync(filepath, 'utf-8'));
  console.log(z);
  res.send(z);
};

const postProducts = function (req, res) {
  let z = JSON.parse(readFileSync(filepath, 'utf-8'));
  z.push(req.body);
  writeFileSync(filepath, JSON.stringify(z, null, 2));
  res.send("Done")
};
const patchProducts = function (req, res) {
  let prop = req.params.id
  let z = JSON.parse(readFileSync(filepath, 'utf-8'));
  for (let i = 0; i < z.length; i++) {
    console.log(z[i].productName);
    if (z[i].productName === prop) {
      console.log(prop);
      z[i] = req.body;
    }
  }
  writeFileSync(filepath, JSON.stringify(z, null, 2));
  res.send()
};
const deleteProducts = function (req, res) {
  let prop = req.params.id
  let z = JSON.parse(readFileSync(filepath, 'utf-8'));
  z = z.filter((e) => e.productName !== prop)
  writeFileSync(filepath, JSON.stringify(z, null, 2));
  res.send()
};


module.exports = { getProducts, postProducts, patchProducts, deleteProducts };
