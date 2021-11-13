const coustumerRoute = require('express').Router();
const userController = require('../controllers/userController');

coustumerRoute.get('/', userController.findUser);

module.exports = coustumerRoute;
