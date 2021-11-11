const { user } = require('../database/models');

const validateLogin = async ({ email, password }) => {
  const userData = await user.findOne({ where: { email } });
  if (!userData) return { code: 404, message: 'Not found' };
  if (userData.password !== password) return { code: 404, message: 'Not found' };
  return {};
};

module.exports = { validateLogin };
