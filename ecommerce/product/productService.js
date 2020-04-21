const db = require("../database")
 
function getAllPrducts() {
    console.log("get request")
    return productDb.get('products').value();
};

function ifProductExists(productId) {

    console.log("Product Id " + productId);

    let result=productDb.get('products')
        .find({ id:productId })
        .value()   

    console.log(result);

    if(typeof(result)=='undefined' || result==null) 
    {
        console.log("means product is not found..so return false")
        return false;
    }
    else
    {
        console.log("means product is exists..sending true");
        return true;
    }

};
exports.getAllPrducts=getAllPrducts;
exports.ifProductExists=ifProductExists;

 
