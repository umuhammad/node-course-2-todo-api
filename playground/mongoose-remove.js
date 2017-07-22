const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5973bb346a1f20243b3e96c0'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5973bb346a1f20243b3e96c0').then((todo) => {
  console.log(todo);
});
