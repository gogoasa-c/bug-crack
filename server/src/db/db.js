const { Sequelize } = require("sequelize");

const username = "postgres";
const password = "pass123";
const host = "localhost";
const port = "5432";
const database = "postgres";

const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: "postgres"
});

module.exports = sequelize;