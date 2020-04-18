const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const prodAdapter = new FileSync("./product/product.json");
const cartAdapter = new FileSync("./shoppingcart/shoppingcart.json");

productDb = low(prodAdapter);
shoppingcartDb=low(cartAdapter)

// Set defaults - required if JSON file is empty
productDb.defaults({  products: [] }).write();
shoppingcartDb.defaults({  shoppingCarts: [] }).write();
loadProducts()

module.exports = productDb;
module.exports=shoppingcartDb;
async function loadProducts()
{
    
}