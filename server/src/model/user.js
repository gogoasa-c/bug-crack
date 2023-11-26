const Sequalize = require("sequelize");

const sequelize = require("../db/db.js")

const User = sequelize.define("user", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false
    }
});

module.exports = User;