const db = require("../database")
 
 function getAllPrducts() {
    console.log("get request")
    return productDb.get('products').value();
};
 function ifProductExists(productId) {
    return true
};

exports.getAllPrducts=getAllPrducts;
exports.ifProductExists=ifProductExists;

 