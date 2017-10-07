const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '59d83fa39524993cc82938a01';
var userId = '59ca4d3581070209c4bb5d80';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// // get data back
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// //get data First()
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

//find by id
// Todo.findById(id).then( (todo)=>{
//     if(!todo){
//         return console.log('Id not found!');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=>{
//     console.log(e);
// });

//user.findById 
User.findById(userId).then((user) => {
    if(!user){
        return console.log('user not found');
    }

    console.log('User by Id',user);
}, (e) => {
    console.log(e);
});