const db = require("../database")
 
function getAllShoppingCart() {

     console.log("in shopping cart service");
     return shoppingcartDb.get('shoppingCarts').value();                        
                    
};
let id = 0;

function addToShoppingCart(userId,productId,price) {     
     
     id++
     shoppingcartDb.get('shoppingCarts')
                   .push({ id:id,userid:userId,productid:productId,price:price})
                   .write()                   
};
function isAlreadyInCart(productId) {
     
     console.log("isAlreadyInCart-"+productId);
     let result=shoppingcartDb
                .get('shoppingCarts')
                .find({ productid:productId })
                .value()

     console.log("Is Already exists" +  result);

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

function removeFromShoppingCart(productId) 
{
     console.log("receive the id to remove-"+productId)

    var findResult= shoppingcartDb.get('shoppingCarts')
          .find({ productid:productId })
          .value() 

     console.log(findResult);

     let result=shoppingcartDb.get('shoppingCarts')
          .remove({ productid:productId })
          .write() 
     
};
exports.addToShoppingCart=addToShoppingCart;
exports.isAlreadyInCart=isAlreadyInCart;
exports.removeFromShoppingCart=removeFromShoppingCart;
exports.getAllShoppingCart=getAllShoppingCart;
 
