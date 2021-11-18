const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/salesService');

const createSale = rescue(async (req, res) => {
  const { saleData, productsArray } = req.body;
  const result = await service.createSale(saleData, productsArray);
  res.status(StatusCodes.CREATED).json(result);
});

const allSalesByUser = rescue(async (req, res) => {
  const { id, role } = req.query;
  const sales = await service.allSalesByUser(id, role);
  res.status(StatusCodes.ACCEPTED).json(sales);
});

module.exports = {
  createSale,
  allSalesByUser,
};
