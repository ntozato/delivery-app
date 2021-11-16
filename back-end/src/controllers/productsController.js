const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const allProducts = await productsService.getAllProducts();
  return res.status(201).json(allProducts);
};
module.exports = { getAllProducts };
