const usersRoute = require('express').Router();
const userController = require('../controllers/userController');

usersRoute.get('/sellers', userController.getAllSellers);

module.exports = usersRoute;
