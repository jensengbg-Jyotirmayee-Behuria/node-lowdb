let baseUrl="http://localhost:8000";
let productsEndPoint="/api/products/";
let cartsEndPoint ="/api/shoppingcarts";
let addToCartEndPoint="/api/shoppingcart/add";
let removeCartEndPoint="/api/shoppingcart/remove";
let removeAllCarts="/api/shoppingcart/removeall/";

export async function getAllProducts() 
{
  let response = await fetch(baseUrl+productsEndPoint);
  let data = await response.json()
  return data;
}

export async function getAllCarts()
{
    let response = await fetch(baseUrl+cartsEndPoint);
    let data = await response.json()
    console.log(data);
    return data;
}

let ctr=0
export async function addToCart(prodId,price,prodname)
{
    let addToCartUrl=baseUrl+addToCartEndPoint+'?pid='+prodId+'&price='+price+'&pname='+prodname;            
    let response = await fetch(addToCartUrl,{ method: 'POST' });
    let data = await response.json()
    return data;  
}

export async function removeFromCart(prodid)
{
    let addToCartUrl='';

    if(prodid==undefined)
    {
        addToCartUrl=baseUrl+removeAllCarts;  
    }else
    {       
         addToCartUrl=baseUrl+removeCartEndPoint+'/'+prodid;         
    }
       
    let response = await fetch(addToCartUrl,{ method: 'DELETE' });
    
     
}
 
 

 