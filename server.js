const low = require('lowdb');
var bodyParser = require('body-parser');
const express = require('express');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('account.json')
const account = low(adapter)
const app = express();
let id = 0;
app.use(bodyParser.json())
app.use(express.static('public'));
 
app.post('/api/account/login', (req, res) => {
    
    console.log(req.body)
    let loginId=req.body.login
    let password=req.body.password    

})

async function validateLogin(login,password)
{

}

app.listen(8000)