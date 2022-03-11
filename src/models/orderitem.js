'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // OrderItem.belongsTo(models.Order,{
      //   as: 'order',
      //   foreignKey: 'order_id'
      // })

      // OrderItem.hasOne(models.Product,{
      //   as: 'product',
      //   foreignKey: 'product_id'
      // })
    }
  }
  OrderItem.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};