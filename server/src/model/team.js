const Sequalize = require("sequelize");

const sequelize = require("../db/db.js");

const Team = sequelize.define("team", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequalize.STRING,
        allowNull: false,
    },
});

module.exports = Team;
