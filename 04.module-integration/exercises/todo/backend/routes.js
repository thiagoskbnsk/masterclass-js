const { Router } = require('express');

const TodoController = require('./controllers/todo');

const routes = Router();

routes.get('/', TodoController.list);
routes.post('/create', TodoController.create);
routes.delete('/delete/:id', TodoController.delete);
routes.put('/check/:id', TodoController.edit);

module.exports = routes;