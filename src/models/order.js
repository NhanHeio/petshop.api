'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Order.belongsTo(models.User,{
      //   as: 'user',
      //   foreignKey: 'user_id'
      // })

      // Order.hasMany(models.OrderItem,{
      //   as: 'orderItems',
      //   foreignKey: 'order_id'
      // })
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    total_price: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};