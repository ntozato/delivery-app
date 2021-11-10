'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
      user_id: { type: DataTypes.INTEGER, foreignKey: true},
      seller_id: { type: DataTypes.INTEGER, foreignKey: true},
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
  }, { timestamps: false });
  return Sale;
};