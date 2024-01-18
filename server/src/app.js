const express = require("express");
const app = express();

const { SERVER_PORT } = require("./constant/constant.js");
const router = require("./route/api.js");
const sequelize = require("./db/db.js");
const Bug = require("./model/bug.js");
const User = require("./model/user.js");
const Project = require("./model/project");
const Team = require("./model/team");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(router);

// Define relationships
User.belongsToMany(Project, {
    through: "User_Projects",
    foreignKey: "User_ID",
});
Project.belongsToMany(User, {
    through: "User_Projects",
    foreignKey: "Project_ID",
});

Team.belongsToMany(User, { through: "Team_Users", foreignKey: "Team_ID" });
User.belongsToMany(Team, { through: "Team_Users", foreignKey: "User_ID" });

Bug.belongsTo(User, { foreignKey: "User_ID" });
User.hasMany(Bug, { foreignKey: "User_ID" });

Bug.belongsTo(Project, { foreignKey: "Project_ID" });
Project.hasMany(Bug, { foreignKey: "Project_ID" });

Project.belongsTo(Team, { foreignKey: "Team_ID" });
Team.hasMany(Project, { foreignKey: "Team_ID" });

sequelize
    .sync()
    .then(() => app.listen(SERVER_PORT))
    .catch((err) => console.log(err));
