const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
