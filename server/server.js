var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res
            .status(400)
            .send(e);
    });
});



app.listen(3000, () => {
    console.log('server is up on port 3000');
});


























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