const service = require("../service/BugService.js");
const {STATUS_CREATED, STATUS_INTERNAL_SERVER_ERROR} = require("../constant/constant");
const BugService = require("../service/BugService.js");

module.exports = {
    add: async (req, res, next) => {
        let bug = await BugService.addBug(req, res);
        if (bug !== null) {
            res.status(STATUS_CREATED).json(bug).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    }
}