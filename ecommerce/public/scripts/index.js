import { getAllProducts, getAllCarts, addToCart } from "./apiclient.js";
//Shopping cart counter
let cartCtr=0

document.querySelector('#open-cart').addEventListener('click',()=>{
     
    document.querySelector('#error').innerHTML="";
});

getAllCarts()
    .then(data=>setCounter(data))

getAllProducts()
  .then(data => Display(data)); 
 

 async function setCounter(data)
 {
    if(data!=undefined) {
       cartCtr=data.length;
       document.getElementsByClassName("has-badge")[0].setAttribute("data-count", cartCtr);
 
    }
 }

 async function Display(productLists)
 {
    productLists.forEach(product => {
        
        let divElem=document.createElement('div');
        divElem.setAttribute('class','card')
       
        //Name
        let h1Elem=document.createElement('h1');
        h1Elem.innerHTML=product.name
        divElem.appendChild(h1Elem);

         //Image
         let imgElem=document.createElement('img');
         imgElem.setAttribute('src',product.image);
         divElem.appendChild(imgElem);
        // //Price
        let pElem=document.createElement('P');
        pElem.innerHTML='SEK ' + product.price
        divElem.appendChild(pElem);
        //Add to Cart button
        let buttonElem=document.createElement('button');
        buttonElem.innerHTML='Add To Cart';         
        buttonElem.addEventListener('click', () =>
        {
            //document.querySelector('#error').innerHTML="";
            processAddToCart(product);

        });
        
        divElem.appendChild(buttonElem);

        document.querySelector("#prodlist").appendChild(divElem);

     });     //When Add to Cart clicked
     
    
}
function processAddToCart(product)
{
    addToCart(product.id,product.price,product.name)
        .then(data=>{
            DisplayCart(data)
        }) 
               
}

async function DisplayCart(data)
{
    document.querySelector('#error').innerHTML="";

     if(data.message!=undefined)
     {
         cartCtr=cartCtr+1
         document.getElementsByClassName("has-badge")[0].setAttribute("data-count", cartCtr);
        

          
     }else
     {
         
        if(data.error !== undefined)
        {
            document.querySelector('#error').innerHTML="Error : Product Already Exists in Cart";
        }
        
     }
     
}
document.querySelector('#open-cart').addEventListener('click',() => 
{
  location.href="viewCart.html";

});


     
    




 
 

  