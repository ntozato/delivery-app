const { sale } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (payload) => {
    const { id } = await sale.create(payload); 
    
};

module.exports = {
    createSale,
};