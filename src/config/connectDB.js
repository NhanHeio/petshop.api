const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD || '', {
    host: process.env.DATABASE_URL,
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