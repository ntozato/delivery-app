const loginRoute = require('express').Router();
const { loginValidation } = require('../middlewares/loginMiddleware');

loginRoute.post('/', loginValidation, (req, res) => {
  res.status(200).json('funcionando');
});

module.exports = loginRoute;
