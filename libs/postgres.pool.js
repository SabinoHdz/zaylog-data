const { Pool } = require('pg');
const { config } = require('./../database/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const pool = new Pool({ connectionString: URL });
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'sabino',
//   password: 'admin123',
//   database: 'my_store',
// });
module.exports = pool;
