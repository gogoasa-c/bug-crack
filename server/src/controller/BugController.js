const service = require("../service/BugService.js");
const {STATUS_CREATED, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK} = require("../constant/constant");
const BugService = require("../service/BugService.js");

module.exports = {
    add: async (req, res) => {
        let bug = await BugService.addBug(req);
        if (bug !== null) {
            res.status(STATUS_CREATED).json(bug).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    get: async (req, res) => {
        let bug = await BugService.getBug(req);
        if (bug !== null) {
            res.status(STATUS_OK).json(bug).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    getAllBugsForProject: async (req, res) => {
        let bugs = await BugService.getAllBugsForProject(req);
        if (bugs !== null) {
            res.status(STATUS_OK).json(bugs).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    }
}