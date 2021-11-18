const { salesProduct } = require('../database/models');

const createSalesProducts = async (payload) => salesProduct.create(payload);

module.exports = {
    createSalesProducts,
};