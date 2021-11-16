const { sale } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (saleData, productsArray) => {
    const { id } = await sale.create(saleData);
    const saleId = 'sale_id';
    const productId = 'product_id';
    await productsArray.map(async (product) => {
        const payload = { 
            [saleId]: id, [productId]: product.product_id, quantity: product.quantity,
        };
        await createSalesProducts(payload);
    });
};

module.exports = {
    createSale,
};

// refatorar posteriormente para transação atômica (transaction)