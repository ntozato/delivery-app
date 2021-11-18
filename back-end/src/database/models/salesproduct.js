'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'id',
      otherKey: 'id'
    });

    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'id',
      otherKey: 'id'
    });
  };

  return SalesProduct;
};
