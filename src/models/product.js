'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Product.belongsTo(models.OrderItem,{
      //   as: 'orderItem',
      //   foreignKey: 'product_id'
      // })

      // Product.belongsTo(models.ProductType,{
      //   as: 'productType',
      //   foreignKey: 'type_id'
      // })

      // Product.belongsTo(models.ImportDetail,{
      //   as: 'importDetail',
      //   foreignKey: 'product_id'
      // })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    desc: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    img: DataTypes.STRING,
    provider: DataTypes.STRING,
    import_id: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};