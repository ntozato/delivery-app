const { user } = require('../database/models');

const findUser = async ({ email: userEmail }) => {
  try {
    const { id, name, email, role } = await user.findOne({ where: { email: userEmail } });
    return { id, name, email, role };
  } catch (error) {
    return { code: 404, message: 'Usuário não encontrado' };
  }
};

module.exports = { findUser };
