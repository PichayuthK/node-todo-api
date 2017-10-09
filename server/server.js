var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET/todos/123432
// :{name} URL parameter
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //res.send(req.params);
    if (!(ObjectID.isValid(id))) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });

    }).catch((e) => {
        res.status(404).send();
    });

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove({ _id: id }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

module.exports = { app };
























// var newTodo2 = new Todo({
//     text: 'Feed the cat'
// });

// newTodo2.save().then((doc) =>{
//     console.log(doc);
// }, (e) => {
//     console.log('Unable to save newTodo2',e);
// });



// var newUser = new User({
//     email: '  peace@gmail.com  '
// });

// newUser.save().then((doc) => {
//     console.log(doc);
// }, (e)=>{
//     console.log('Unable to add new user',e);
// });