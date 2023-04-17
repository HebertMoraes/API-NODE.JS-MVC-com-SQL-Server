const express = require('express');
const controllerCarro = require('./controllers/CarroController');
const controllerSale = require('./controllers/SaleController');
const controllerFaturamento = require('./controllers/FaturamentoController');

const routes = express.Router();

routes.get('/GetAllCars', controllerCarro.GetAllCars);

routes.post('/CreateCar', controllerCarro.CreateCar);

routes.post('/UpdateCar', controllerCarro.UpdateCar);

// routes.get('/GetOne', controllerProduto.GetOne);
routes.post('/GetOneCar', controllerCarro.GetOneCar); // MUDAMOS PARA POST

routes.post('/DeleteCar', controllerCarro.DeleteCar);



routes.get('/GetAllSales', controllerSale.GetAllSales);

routes.post('/CreateSale', controllerSale.CreateSale);

routes.post('/UpdateSale', controllerSale.UpdateSale);

routes.post('/GetOneSale', controllerSale.GetOneSale); // MUDAMOS PARA POST

routes.post('/DeleteSale', controllerSale.DeleteSale);


routes.get('/GetAllFaturamentos', controllerFaturamento.GetAllFaturamentos);

routes.post('/CreateFaturamento', controllerFaturamento.CreateFaturamento);

routes.post('/UpdateFaturamento', controllerFaturamento.UpdateFaturamento);

routes.post('/GetOneFaturamento', controllerFaturamento.GetOneFaturamento); // MUDAMOS PARA POST

routes.post('/Deletefaturamento', controllerFaturamento.DeleteFaturamento);

module.exports = routes;
