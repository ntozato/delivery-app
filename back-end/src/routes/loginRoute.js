const loginRoute = require('express').Router();
const { loginValidation } = require('../middlewares/loginMiddleware');
const loginService = require('../services/loginService');

loginRoute.post('/', loginValidation, (req, res) => {
  const { email } = req.body;
  const token = loginService.generateToken({ email });
  res.status(200).json(token);
});

module.exports = loginRoute;
