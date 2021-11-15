const { StatusCodes } = require('http-status-codes');
const rescue = require('express-rescue');
const service = require('../services/checkoutService');

const createSale = rescue(async (req, res) => {
    console.log('AAAAA');
    const payload = req.body;
    await service.createSale(payload);
    res.status(StatusCodes.CREATED).json('teste');
});

module.exports = {
    createSale,
};