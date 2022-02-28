'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class import_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ImportDetail.hasOne(models.Product,{
        as: 'product',
        foreignKey: 'product_id'
      })

      ImportDetail.belongsTo(models.Import,{
        as: 'import',
        foreignKey: 'import_id'
      })
    }
  }
  import_details.init({
    id: DataTypes.INTEGER,
    import_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ImportDetail',
  });
  return import_details;
};