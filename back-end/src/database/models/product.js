'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  }, { timestamps: false });

  // Product.associate = (models) => {
  //   models.product.hasMany(models.salesProduct, {
  //     as: 'salesProducts',
  //     foreignKey: 'product_id'
  //   })
  // }
  return Product;
};
