//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// first argument where you db is, second callback func
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59c79832a846009a64c82973')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c7891aea523100e4b257c9')
    }, {
        $inc: {age : +1},
        $set: {name: 'Peace'}
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});            
