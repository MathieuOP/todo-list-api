const express = require('express');
const  { getTodoList } = require('../controllers/TodoListController');

const router = express.Router();

router.get('/', getTodoList) // home todoList

module.exports = router;