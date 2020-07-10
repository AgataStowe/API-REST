const express = require('express');
const routes = express.Router();
const rulesController = require('./controllers/RulesController');

routes.get('/rules', rulesController.list);
routes.get('/rules/:iniDate/:finDate', rulesController.listRulesByIntervail);
routes.post('/rules', rulesController.create);
routes.delete('/rules/:type', rulesController.destroy);
module.exports = routes;