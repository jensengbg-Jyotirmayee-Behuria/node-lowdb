const database=require('lowdb')
const FileSync=require('./node_modules/lowdb/adapters/FileSync')


//Insert
const adapter=new FileSync('db.json');
const db=database(adapter)
db.defaults({names:[]}).write()

db.get('names')
  .push({firstName:'Neil' , lastName:'Armstrong' , Age:61})
  .write()

db.get('names')
  .push({firstName:'Robin' , lastName:'Hood' , Age:35})
  .write()

db.get('names')
  .push({firstName:'Albert' , lastName:'Einstein' , Age:65})
  .write()

db.get('names')
  .push({firstName:'Third' , lastName:'Name' , Age:65})
  .write()

  db.get('names')
  .push({firstName:'Fourth' , lastName:'Name' , Age:65})
  .write()
  db.get('names')
  .push({firstName:'Fifth' , lastName:'Name' , Age:65})
  .write()
//Retrive all names
