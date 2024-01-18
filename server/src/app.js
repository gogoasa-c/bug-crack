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
    foreignKey: "userId",
});
Project.belongsToMany(User, {
    through: "User_Projects",
    foreignKey: "projectId",
});

Team.belongsToMany(User, { through: "Team_Users", foreignKey: "teamId" });
User.belongsToMany(Team, { through: "Team_Users", foreignKey: "userId" });

Bug.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Bug, { foreignKey: "userId" });

Bug.belongsTo(Project, { foreignKey: "projectId" });
Project.hasMany(Bug, { foreignKey: "projectId" });

Project.belongsTo(Team, { foreignKey: "teamId" });
Team.hasMany(Project, { foreignKey: "teamId" });

sequelize
    .sync()
    .then(() => app.listen(SERVER_PORT))
    .catch((err) => console.log(err));
