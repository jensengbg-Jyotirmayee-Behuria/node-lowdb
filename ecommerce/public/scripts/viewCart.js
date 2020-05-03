import { getAllCarts, removeFromCart } from "./apiclient.js";

getAllCarts()
   .then(data => DisplayCarts(data)); 

async function removeCartItem(prodid)
{
    
    removeFromCart(prodid);
}
async function DisplayCarts(carts)
{
       
    carts.forEach(cart=>{     

        let cartitem = document.createElement("div");//card
        cartitem.classList.add("cartitem");
        cartitem.setAttribute('id', cart.id);
         
            
        let productName = document.createElement('p');
        productName.innerHTML=cart.prodname;
      
        cartitem.appendChild(productName);

        let price=document.createElement('p');
        price.innerHTML='Price :SEK ' + cart.price;
        cartitem.appendChild(price);

        let removeButton=document.createElement('button');
        removeButton.innerHTML="Remove"
        removeButton.addEventListener('click',()=> {
            let result=removeCartItem(cart.productid);
            cartitem.remove();
        })
        cartitem.appendChild(removeButton);
        document.querySelector('#cartItems').appendChild(cartitem);
   })
   
   
    
}

        //can i call the function here 
 