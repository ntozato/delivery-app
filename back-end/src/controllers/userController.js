const userService = require('../services/userServices');

const findUser = async (req, res) => {
  const { email } = req.query;
  const dataUser = await userService.findUser({ email });
  if (dataUser.message) return res.status(dataUser.code).json(dataUser.message);
  return res.status(200).json({ ...dataUser });
};

const getAllSellers = async (req, res) => {
  const allSellers = await userService.getAllSellers();
  return res.status(200).json(allSellers);
};

module.exports = { findUser, getAllSellers };
