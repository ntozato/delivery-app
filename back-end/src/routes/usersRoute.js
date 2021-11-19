const usersRoute = require('express').Router();
const userController = require('../controllers/userController');

usersRoute.get('/sellers', userController.getAllSellers);
usersRoute.get('/seller', userController.getSeller);

module.exports = usersRoute;
