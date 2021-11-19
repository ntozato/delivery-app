const { salesProduct, sale } = require('../database/models');

const createSalesProducts = async (payload) => salesProduct.create(payload);

const getSalesProducts = async (id) => {
    const saleId = 'sale_id';
    try {
        return await salesProduct.findAll({ where: { [saleId]: id },
        include: { model: sale, as: 'sales' } });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createSalesProducts,
    getSalesProducts,
};