const postgres = require("postgres");

// replace these w/ your own info
const username = "postgres";
const password = "pass123";
const host = "localhost";
const port = "5432";
const database = "postgres";

const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`);



module.exports = sql;