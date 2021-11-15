const { sale } = require('../database/models');

const createSale = async (payload) => sale.create(payload);

module.exports = {
    createSale,
};