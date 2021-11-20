const rescue = require('express-rescue');
const userService = require('../services/userServices');

const findUser = async (req, res) => {
  const { email } = req.query;
  const dataUser = await userService.findUser({ email });
  if (dataUser.message) return res.status(dataUser.code).json(dataUser.message);
  return res.status(200).json({ ...dataUser });
};

const getAllUsers = async (req, res) => {
  const allSellers = await userService.getAllUsers();
  return res.status(200).json(allSellers);
};

const getSeller = rescue(async (req, res) => {
  const { id } = req.params;
  const seller = await userService.getSeller(id);
  return res.status(200).json(seller);
});

module.exports = { findUser, getAllUsers, getSeller };
