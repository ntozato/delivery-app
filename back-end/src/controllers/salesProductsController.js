const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/salesProductsService');

const createSalesProducts = rescue(async (req, res) => {
    const payload = req.body;
    const result = await service.createSalesProducts(payload);
    res.status(StatusCodes.CREATED).json(result);
});

module.exports = {
    createSalesProducts,
};