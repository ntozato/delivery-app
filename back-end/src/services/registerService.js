const md5 = require('md5');
const { user } = require('../database/models');

const cryptoPassword = (password) => md5(password);

const createUser = async (payload) => {
  const { name, email, password, role = 'customer' } = payload;
  const [userData, created] = await user.findOrCreate({
    where: { name, email },
    defaults: { password: cryptoPassword(password), role },
  });
  // retornei em forma de objeto pq fica mais claro
  return { userData, created };
};

module.exports = {
  createUser,
};
