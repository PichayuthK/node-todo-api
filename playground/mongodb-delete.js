//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// first argument where you db is, second callback func
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) =>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelele
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    //find any duplicate deleteMany
    // db.collection('Users').deleteMany({name: 'Peace'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    db.collection('Users').findOneAndDelete({name: 'Ben'}).then((result)=>{
        console.log(result);
    });

    // db.close();
});            
