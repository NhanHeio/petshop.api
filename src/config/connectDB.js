const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('petshop', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})