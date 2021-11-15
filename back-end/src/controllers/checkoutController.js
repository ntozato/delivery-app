const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/checkoutService');

const createSale = rescue(async (req, res) => {
    const payload = req.body;
    const result = await service.createSale(payload);
    res.status(StatusCodes.CREATED).json(result);
});

const createSalesProducts = rescue(async (req, res) => {
    const payload = req.body;
    const result = await service.createSalesProducts(payload);
    res.status(StatusCodes.CREATED).json(result);
});

module.exports = {
    createSale,
    createSalesProducts,
};