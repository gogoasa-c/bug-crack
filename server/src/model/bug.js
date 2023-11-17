const Sequelize = require("sequelize");

const sequelize = require("../db/db.js");

const Bug = sequelize.define("bug", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    severity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [["Harmless", "Low", "Medium", "High", "Critical"]]
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commitLink: {
        type: Sequelize.STRING,
        allowNull: false
    },
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Bug;