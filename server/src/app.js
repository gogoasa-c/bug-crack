const express = require("express");
const app = express();

const {SERVER_PORT} = require("./constant/constant.js");
const router = require("./route/api.js");
const sequelize = require("./db/db.js");
const Bug = require("./model/bug.js");
const User = require("./model/user.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(router);

sequelize.sync()
    .then(() => app.listen(SERVER_PORT))
    .catch(err => console.log(err));

