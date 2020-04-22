const db = require("../database")

// Get all products from Database
function getAllPrducts() {
    
    return productDb.get('products').value();
};
//Check if the product is exists?
function ifProductExists(productId) {
     
    let result=productDb.get('products')
        .find({ id:productId })
        .value()       
    if(typeof(result)=='undefined' || result==null) 
    {
        return false;
    }
    else
    {
       return true;
    }

};
exports.getAllPrducts=getAllPrducts;
exports.ifProductExists=ifProductExists;

 
