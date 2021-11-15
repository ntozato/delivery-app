const { sale, salesProduct } = require('../database/models');

const createSale = async (payload) => sale.create(payload);

const createSalesProducts = async (payload) => salesProduct.create(payload);

module.exports = {
    createSale,
    createSalesProducts,
};