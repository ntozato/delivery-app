const { user } = require('../database/models');

const findUser = async ({ email: userEmail }) => {
  try {
    const { id, name, email, role } = await user.findOne({ where: { email: userEmail } });
    return { id, name, email, role };
  } catch (error) {
    return { code: 404, message: 'Usuário não encontrado' };
  }
};

const getAllSellers = async () => {
  const sellers = await user.findAll({
    where: { role: 'seller' },
    attributes: ['id', 'name'],
  });
  return sellers;
};

const getSeller = async (id) => {
  try {
    const seller = await user.findOne(
      { where: { id, role: 'seller' }, attributes: ['name'] },
);
    return seller;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findUser, getAllSellers, getSeller };
