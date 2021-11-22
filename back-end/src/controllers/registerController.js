const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/registerService');

const createUser = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;
  const payload = { name, email, password, role };
  const result = await service.createUser(payload);
  if (result.created) {
    return res.status(StatusCodes.CREATED).json(result.userData);
  }
  return res.status(StatusCodes.CONFLICT).json('Usuário já cadastrado');
});

module.exports = {
  createUser,
};
