'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'user_id'
      })

      Booking.hasOne(models.Service,{
        as: 'service',
        foreignKey: 'service_id'
      })
    }
  }
  bookings.init({
    id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return bookings;
};