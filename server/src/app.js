const express = require("express");
const app = express();

const {SERVER_PORT} = require("./constant/constant.js");
const router = require("./route/api.js");

app.use(router);

app.listen(SERVER_PORT);