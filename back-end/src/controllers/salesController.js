const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/salesService');

const createSale = rescue(async (req, res) => {
    const payload = req.body;
    const result = await service.createSale(payload);
    res.status(StatusCodes.CREATED).json(result);
});

module.exports = {
    createSale,
};