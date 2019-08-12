const todo = require('../models/Todo');

// home
exports.getTodoList = (req, res) => { 

    todo.find({}).sort({createdAt: -1}).exec((err, data) => {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.status(200).json(data);
        }
    }) 
};

exports.deleteTodoList = (req, res) => {
    todo.findOneAndDelete({_id: req.params.id}, (err, data) => {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.status(200).json({
                isDelete: true,
                id: data.id,
            });
        }
    }) 
};

exports.addTodoList = (req, res) => {
    // console.log(req.body.todo);

    todo.create({todo: req.body.todo}, (err, data) => {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.status(200).json({
                add: true,
                data,
            });
        }
    });
};

exports.updateTodoList = (req, res) => {
    const todoId = req.params.id;

    todo.findById(todoId, function (err, data) {
        if (err) {
            res.render('error', {
                status: 500
            });
        }
        else {
            data.checked = !data.checked;
            data.save((err, data) => {
                res.status(200).json({
                    update: true,
                    data,
                });
            });
        }
    });
}