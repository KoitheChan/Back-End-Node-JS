const Pool = require('pg').Pool;

const pool = new Pool({
    user: "chris",
    host: "localhost",
    database: "chris",
    password: "postgres",
    port: "5432",
});

module.exports = pool;