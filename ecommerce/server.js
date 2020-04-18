const db = require("./database")
const productService = require('./product/productService');

var bodyParser = require('body-parser');
const express = require('express');
 
// Endpoint's for the following:
//  Download all products (then below on what a product should contain).
// Be able to add products to a shopping cart.
// Be able to remove products in the shopping cart.
// Download the shopping cart with all the added products.
// You should not be able to add the same product to the shopping cart again.
// You should receive an error message if you try to add a product that does not exist.
// You should receive an error message if you try to remove a product that does not exist.


const app = express();
let id = 0;
app.use(bodyParser.json())
//Req 1 - Get all Products from Database
app.get('/api/products/', (req, res) => {             
       res.send(JSON.stringify(productService.getAllPrducts()));       
})

app.post('/api/shoppingcart/remove/', (req, res) => {  
    
    if(isAlreadyInCart(sessionid,prodId))
    {
        //Remove and send success 
        res.end("Removed success");
         
    }else
    {
        res.end({error:"Product not exists in cart"})
    }
   
})


//Req-2 Be able to add products to a shopping cart.
app.post('/api/shoppingcart/add/', (req, res) => {        
    
      let sessionid=req.query.sessionid  //this can be sessionid or any userid
      let prodId=req.query.prodid
      let prodName=req.query.prodName
      let price=req.query.price
      
      //You should receive an error message if you try to add a product that does not exist.
      if(ifProductExists(prodId))
      {
        //You should not be able to add the same product to the shopping cart again.
        if(isAlreadyInCart(sessionid,prodId))
            res.send({error:"Product already in shopping cart"})
        else
            res.send(JSON.stringify(addToShoppingCart()));  

      }
      
      else
      {
          res.send({error:"Product not exists "})
      }
           
})

app.listen(8000)