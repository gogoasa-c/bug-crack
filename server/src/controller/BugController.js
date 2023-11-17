const service = require("../service/BugService.js");
const {STATUS_CREATED} = require("../constant/constant");
const BugService = require("../service/BugService.js");

module.exports = {
    add: (req, res, next) => {
        // business logic, calling the service responsible
        BugService.addBug(req, res);
    }
}