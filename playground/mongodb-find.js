//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// first argument where you db is, second callback func
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    //  db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    // db.collection('Todos').find({ 
    //     _id: new ObjectID('59c7859db8ec822f14ba5fe5')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Peace' }).toArray().then((docs) => {
        console.log('Users');
        console.log(docs);
    }, (err) => {
        console.log('Unable to fetch user data', err);
    });

    // db.close();
});            
