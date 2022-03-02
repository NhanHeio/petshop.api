'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Role,{
      //   as: 'role',
      //   foreignKey: 'role_id',
      // })

      // User.hasMany(models.Order,{
      //   as:'orders',
      //   foreignKey: 'user_id'
      // })

      // User.hasOne(models.Booking,{
      //   as: 'booking',
      //   foreignKey: 'user_id'
      // })
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};