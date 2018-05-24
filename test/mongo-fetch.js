var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApi', {useNewUrlParser: true},(err, client) =>{
    if(err){
        return console.log(err);
    }
     var db = client.db('TodoApi');

     db.collection('Users').find({name: 'John Wick'}).toArray().then((res) => {

        console.log(JSON.stringify(res, undefined, 2));
     }, (err) =>{
        console.log(err);
     })

     client.close();
} )