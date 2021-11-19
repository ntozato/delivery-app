const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/salesProductsService');

const createSalesProducts = rescue(async (req, res) => {
    const payload = req.body;
    const result = await service.createSalesProducts(payload);
    res.status(StatusCodes.CREATED).json(result);
});

const getSalesProducts = rescue(async (req, res) => {
    const { id } = req.params;
    const result = await service.getSalesProducts(id);
    return res.status(StatusCodes.OK).json(result);
});

module.exports = {
    createSalesProducts,
    getSalesProducts,
};