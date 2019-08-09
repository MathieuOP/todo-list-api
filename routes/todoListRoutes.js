const express = require('express');
const  { 
    getTodoList,
    deleteTodoList,
    addTodoList,
    updateTodoList
} = require('../controllers/TodoListController');

const router = express.Router();

router.get('/', getTodoList) // page home
router.delete('/delete/:id', deleteTodoList) // delete todo
router.post('/add', addTodoList) // add todo
router.put('/update/:id', updateTodoList); // put todo

module.exports = router;