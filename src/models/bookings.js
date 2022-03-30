'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Booking.belongsTo(models.User,{
      //   as: 'user',
      //   foreignKey: 'user_id'
      // })

      // Booking.hasOne(models.Service,{
      //   as: 'service',
      //   foreignKey: 'service_id'
      // })

    }
  }
  Booking.init({
    service: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};