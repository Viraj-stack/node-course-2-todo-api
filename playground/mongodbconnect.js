const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // },(err, result) => {
  //   if (err){
  //     return console.log('unable to Insert',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // db.collection('userdetails').insertOne({
  //   name: 'Viraj',
  //   age: 20,
  //   location: 'Paldi'
  // },(err,result) => {
  //   if (err){
  //     return console.log('inable to insert the user details', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  db.close();
});
