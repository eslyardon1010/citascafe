const MySQL = require('mysql2');
require('dotenv').config()

const pool = MySQL.createPool({
    host: 'localhost',
    user: 'root',
    database: 'catacitas',
    password: process.env.DB_PASSWORD
});

module.exports = pool.promise();