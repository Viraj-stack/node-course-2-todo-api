// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');


    //
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5d22595a96119ca83413826e')
    // },{
    //   $set: {
    //     completed: true
    //   }
    // },{
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // })

    db.collection('userdetails').findOneAndUpdate({
      _id: new ObjectID('5d225b4081f6e72fa8a77d31')
    },{
      $set: {
        name: "Viraj Patel"
      },
      $inc: {
        age: 1
      }
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })
  //db.close();
});
