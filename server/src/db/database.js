/* Set up data base */
const pg = require('pg');

/* use environment variables for connection data */
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    max: parseInt(process.env.DB_MAX_CLIENTS, 10),
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MILLIS, 10),
};

const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
    console.error(err.message);
});

module.exports = pool;
