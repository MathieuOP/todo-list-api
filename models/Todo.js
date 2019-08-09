const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: String,
    checked: { type:Boolean, default: false },
},
{ 
    collection: 'todolist' 
},
{
    versionKey: false,
});

const todo = mongoose.model('Todo', todoSchema);
module.exports = todo;