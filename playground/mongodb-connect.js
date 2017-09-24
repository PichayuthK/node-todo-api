//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//object destructuring
// var user = {name: 'Peace', age: 22};
// var {name} = user;
// console.log(name);

// first argument where you db is, second callback func
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    //collection is table in sql
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed : false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     //_id: 123
    //     name: 'Peace',
    //     age: 22,
    //     location: 'Bangkok'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // })

    db.close();
});
