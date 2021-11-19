const rescue = require('express-rescue');
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

const getSeller = rescue(async (req, res) => {
  const { id } = req.body;
  const seller = await userService.getSeller(id);
  return res.status(200).json(seller);
});

module.exports = { findUser, getAllSellers, getSeller };
