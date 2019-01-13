const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c39a90067ae373a5c95d11211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById().then((todo) => {
//   if (!todo) {
//   return console.log('Id not found);
//   }
// }).catch((e) => console.log(e));

  User.findById('5c3a293d8316a46562222146').then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('user by Id', user);
    //console.log(JSON.stringify(user, undefined, 2));
  }, (e) => {
    console.log(e);
  });
