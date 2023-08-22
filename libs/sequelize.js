const { Sequelize } = require('sequelize');
const { config } = require('./../database/config');

const setupModels = require('./../db/models/index');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  logging: true,
});
setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;
