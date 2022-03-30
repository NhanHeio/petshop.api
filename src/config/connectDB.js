const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('heroku_daaeb831210df92', 'b6488f48f5505f', '8bbbab67', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql',
    logging: false,
})

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDB;