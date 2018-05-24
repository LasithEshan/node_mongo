var Mongoclient = require('mongodb').MongoClient;


Mongoclient.connect('mongodb://localhost:27017/TodoApi',{useNewUrlParser: true},(err, client) =>{
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to Database');

    var db = client.db('TodoApi');


    // db.collection('Todos').insertOne({
    //     text:'first field',
    //     completed:false
    // },(err, res) => {
    //     if(err){
    //         return console.log('couldnt enter', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Lasith Eshan',
        age: 23,
        location: 'Matara'
    },(err, res) =>{
        if(err){
            return console.log('error!', err)
        }
        console.log(res.ops[0]._id.getTimestamp());
    })

    client.close();
});