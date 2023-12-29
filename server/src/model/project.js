const Sequelize = require('sequelize');

const sequelize = require('../db/db.js');

const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    repositoryLink: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    teamId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Project;