const db = require("../database")

function getAllShoppingCart() {

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
          
     let result=shoppingcartDb
                .get('shoppingCarts')
                .find({ productid:productId })
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

function removeFromShoppingCart(productId) 
{
      let result=shoppingcartDb.get('shoppingCarts')
          .remove({ productid:productId })
          .write()      
};

//Module exports all functions 
exports.addToShoppingCart=addToShoppingCart;
exports.isAlreadyInCart=isAlreadyInCart;
exports.removeFromShoppingCart=removeFromShoppingCart;
exports.getAllShoppingCart=getAllShoppingCart;
 
