// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  //
  // db.collection('Todos').find({_id: new ObjectID('5d127784c98d5bc5e52b1dd0')}).toArray().then((doc) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(doc,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch the todo',err);
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos-count: ${count}`);
  },(err) => {
    console.log('Unable to fetch the todo',err);
  })


    db.collection('userdetails').find({name: "Viraj"}).toArray().then((doc) => {
      console.log('Userdetails:-');
      console.log(JSON.stringify(doc,undefined,2));
    },(err) => {
      console.log('Unable to fetch the todo',err);
    })

  //db.close();
});
