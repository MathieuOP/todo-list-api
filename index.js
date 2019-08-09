const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/todolist', {useNewUrlParser: true});


const app = express();

const todoListRoutes = require('./routes/todoListRoutes');

app.use(cors())
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())

.use('/', todoListRoutes)
.use('/delete/:id', todoListRoutes)
.use('/add', todoListRoutes)
.use('/put/:id', todoListRoutes)
  
.use((req, res, next) => { /* On redirige vers la todolist si la page demandée n'est pas trouvée */
    res.redirect('/');
})

.listen(3001, function () {
    console.log('Port écouté: 3001');
});