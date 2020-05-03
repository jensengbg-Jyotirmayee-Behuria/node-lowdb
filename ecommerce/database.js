const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const prodAdapter = new FileSync("./product/product.json");
const cartAdapter = new FileSync("./shoppingcart/shoppingcart.json");

productDb = low(prodAdapter);
shoppingcartDb=low(cartAdapter)

// Set defaults - required if JSON file is empty
productDb.defaults({  products: [] }).write();

//All the previous cart must be rfreshed ?
shoppingcartDb.get('shoppingCarts').remove().write();
shoppingcartDb.defaults({  shoppingCarts: [] }).write();

module.exports = productDb;
module.exports=shoppingcartDb;
 
