// Endpoint's for the following:
//  http://localhost:8000/api/products   GET Download all products
//  http://localhost:8000/api/shoppingcart/add  POST Be able to add products to a shopping cart. pass param in query.
//  http://localhost:8000/api/shoppingcart/remove/prodid  DELETE remove product from carts
//  http://localhost:8000/api/shoppingcarts/  GET .get all shopping cart
 
const db = require("./database")
//Get product and cart services
const productService = require('./product/productService');
const shoppingCartService = require('./shoppingcart/shoppingCartService');
 
const express = require('express');
const app = express(); 
 
//Req 1 - Get all Products from Database
app.get('/api/products/', (req, res) => {        
           
       res.send(JSON.stringify(productService.getAllPrducts()));       
})
//Req.Be able to remove products in the shopping cart.
app.delete('/api/shoppingcart/remove/:prodid', (req, res,next) => {   
    //If product id exists in cart then only allow remove
    if(shoppingCartService.isAlreadyInCart(parseInt(req.params.prodid)))   
    {        
        shoppingCartService.removeFromShoppingCart(parseInt(req.params.prodid))
        res.send("Removed success");
        next()
    }
    else
    {  
        res.send({error:"Product not exists in cart"})
        next();        
    }   
})
//Req-2 Be able to add products to a shopping cart.
app.post('/api/shoppingcart/add/', (req, res,next) => {        
    let userId=req.query.userId  //this can be sessionid or any userid
    let prodId= parseInt(req.query.prodid);
    let price=req.query.price        

    //You should receive an error message if you try to add a product that does not exist.
    if(productService.ifProductExists(prodId))
    {
        //You should not be able to add the same product to the shopping cart again.
        if(shoppingCartService.isAlreadyInCart(prodId))
        {                      
            res.send({error:'Product already in shopping cart'})
            next()
        }
        else
        {
            //Be able to add products to a shopping cart
            shoppingCartService.addToShoppingCart(userId,prodId,price);
            res.send({message: 'Add to shopping cart is success'});           
            next()     
        }
    }      
    else
    {
        res.send({error:"Product not exists "})
        next();
        
    }           
})
//Get all shopping cart
app.get('/api/shoppingcarts/', (req, res) => {        
    
    res.send(JSON.stringify(shoppingCartService.getAllShoppingCart()));     
    res.end();  
})
app.listen(8000) 
console.log("Server started..")
