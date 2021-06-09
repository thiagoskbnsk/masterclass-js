const { Router } = require('express');

const FinancesController = require('./controllers/finances');

const routes = Router();

routes.get('/historico', FinancesController.historico);
routes.post('/saida', FinancesController.saida);
routes.post('/entrada', FinancesController.entrada);
routes.get('/total', FinancesController.total);

module.exports = routes;