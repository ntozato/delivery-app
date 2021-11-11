const service = require('../service/registerService');

const createUser = async () => {
  const create = await service.createUser();
  return create;
};

module.exports = {
  createUser,
};