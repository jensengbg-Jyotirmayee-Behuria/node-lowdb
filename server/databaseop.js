const database=require('lowdb')
const FileSync=require('./node_modules/lowdb/adapters/FileSync')



const adapter=new FileSync('db.json');
const db=database(adapter)
//Retrieve All
let resultAll=db.get('names').value()
console.log(resultAll)

//Get the thirdname
let thirdName=db.get('names').value()
console.log(thirdName[2]);

//Get all ages and sum them up
let totalAge=0;
 resultAll.forEach(name => {
     let age=name.Age

      totalAge=totalAge+age
     
 });
 console.log(totalAge)