const express = require('express');
const controllerCarro = require('./controllers/CarroController');

const routes = express.Router();

routes.get('/List', controllerCarro.GetAll);

routes.post('/Create', controllerCarro.Create);

routes.post('/Update', controllerCarro.Update);

// routes.get('/GetOne', controllerProduto.GetOne);
routes.post('/GetOne', controllerCarro.GetOne); // MUDAMOS PARA POST

routes.post('/Delete', controllerCarro.Delete);

module.exports = routes;
