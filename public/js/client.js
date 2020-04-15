document.querySelector("#btn-login").addEventListener('click', () =>
{
    alert("clicked")
    let loginId=document.querySelector("#loginid").value
    let password=document.querySelector("#password").value
    login(loginId,password)    
}) 

async function login(id, password) {

    const data = { login: id , password:password };
    const url = "http://localhost:8000/api/account/login"
   
    fetch(url, 
        {  
        method: 'POST', // or 'PUT'
        headers: {   'Content-Type': 'application/json' },
        body: JSON.stringify(data)})
    }
