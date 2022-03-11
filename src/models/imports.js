'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Import extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Import.hasMany(models.ImportDetail,{
      //   as: 'importDetails',
      //   foreignKey: 'import_id'
      // })

      // Import.belongsTo(models.Provider,{
      //   as: 'provider',
      //   foreignKey: 'provider_id'
      // })
    }
  }
  Import.init({
    provider_id: DataTypes.INTEGER,
    import_date: DataTypes.DATE,
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Import',
  });
  return Import;
};