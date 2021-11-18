const { sale, user } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (saleData, productsArray) => {
    const { id } = await sale.create(saleData);
    const saleId = 'sale_id';
    const productId = 'product_id';
    await productsArray.map(async (product) => {
        const payload = { 
            [saleId]: id, [productId]: product.id, quantity: product.qtd,
        };
        await createSalesProducts(payload);
    });
    return id;
};

const getSale = async (id) => {
    try {
        const result = await sale.findOne({ where: { id } });
    return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createSale,
    getSale,
};

// refatorar posteriormente para transação atômica (transaction)