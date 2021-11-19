const loginRoute = require('express').Router();
const { loginValidation } = require('../middlewares/loginMiddleware');
const loginService = require('../services/loginService');

loginRoute.post('/', loginValidation, async (req, res) => {
  const { email } = req.body;
  const user = await loginService.generateUserToken({ email });
  res.status(200).json(user);
});

module.exports = loginRoute;
