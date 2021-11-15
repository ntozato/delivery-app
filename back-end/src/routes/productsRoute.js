const productsRoute = require('express').Router();
const productsController = require('../controllers/productsController');

productsRoute.get('/', productsController.getAllProducts);

module.exports = productsRoute;
