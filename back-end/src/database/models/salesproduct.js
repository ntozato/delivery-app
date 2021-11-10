'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false });
  return SalesProduct;
};
