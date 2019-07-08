// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

    // db.collection('Todos').deleteMany({text: "something"}).then((result) => {
    //   console.log(result);
    // })

    // db.collection('Todos').deleteOne({text: "something"}).then((result) => {
    //   console.log(result);
    // })

    db.collection('Todos').findOneAndDelete({text: "something"}).then((result) => {
      console.log(result);
    })
  //db.close();
});