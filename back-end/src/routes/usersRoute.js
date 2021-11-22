const usersRoute = require('express').Router();
const userController = require('../controllers/userController');

usersRoute.get('/sellers', userController.getAllUsers);
usersRoute.get('/seller/:id', userController.getSeller);

module.exports = usersRoute;
