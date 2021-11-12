const md5 = require('md5');
const { User } = require('../database/models');

const cryptoPassword = (password) => md5(password);

const createUser = async (payload) => {
  const { name, email, password } = payload;
  const [user, created] = await User.findOrCreate({
    where: { name, email },
    defaults: { password: cryptoPassword(password) },
  });
  // retornei em forma de objeto pq fica mais claro
  return { user, created };
};

module.exports = {
  createUser,
};