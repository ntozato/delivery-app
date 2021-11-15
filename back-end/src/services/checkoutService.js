const { sale } = require('../database/models');

const createSale = async (payload) => {
    const result = await sale.create(payload);
    console.log(result);
};

module.exports = {
    createSale,
};