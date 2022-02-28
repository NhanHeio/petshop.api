'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Import.hasMany(models.ImportDetail,{
        as: 'importDetails',
        foreignKey: 'import_id'
      })

      Import.belongsTo(models.Provider,{
        as: 'provider',
        foreignKey: 'provider_id'
      })
    }
  }
  imports.init({
    id: DataTypes.INTEGER,
    provider_id: DataTypes.INTEGER,
    import_date: DataTypes.DATE,
    total_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Import',
  });
  return imports;
};