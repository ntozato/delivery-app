const { sale, product } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (saleData, productsArray) => {
  const { id } = await sale.create(saleData);
  const saleId = 'sale_id';
  const productId = 'product_id';
  await productsArray.map(async (productOrder) => {
      const payload = { 
          [saleId]: id, [productId]: productOrder.id, quantity: productOrder.qtd,
      };
      await createSalesProducts(payload);
  });
  return id;
};

const allSalesByUser = async (id, role) => {
  let userId = '';
  if (role === 'seller') {
    userId = 'seller_id';
  } else {
    userId = 'user_id';
  }
  const sales = await sale.findAll({
    where: { [userId]: id },
    attributes: ['id',
      'total_price',
      'sale_date',
      'status',
      'delivery_address',
      'delivery_number'],
  });
  return sales;
};

const getSale = async (id) => {
    try {
        const result = await sale.findOne({ where: { id },
        include: [{
            model: product,
            as: 'products',
            through: { attributes: ['quantity'] },
        }],
            });
    return result;
    } catch (error) {
        console.log(error);
    }
};

const updateSaleStatus = async (id, status) => {
  try {
    const updatedSale = await sale.update({ status }, { where: { id } });

    if (updatedSale[0] === 1) {
      return status;
    }
    return updatedSale;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    createSale,
    allSalesByUser,
    getSale,
    updateSaleStatus,
};

// refatorar posteriormente para transação atômica (transaction)
