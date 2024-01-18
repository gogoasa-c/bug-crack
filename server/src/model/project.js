const Sequalize = require("sequelize");

const sequelize = require("../db/db.js");

const Project = sequelize.define("project", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    repo: {
        type: Sequalize.STRING,
        allowNull: false,
    },
});
