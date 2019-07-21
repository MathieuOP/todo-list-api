const express = require('express');
const app = express();

const todoListRoutes = require('./routes/todoListRoutes');

// app.use(express.static(__dirname))

app.use('/', todoListRoutes)
  
.use((req, res, next) => { /* On redirige vers la todolist si la page demandée n'est pas trouvée */
    res.redirect('/');
})

.listen(3000, function () {
    console.log('Port écouté: 3000');
});