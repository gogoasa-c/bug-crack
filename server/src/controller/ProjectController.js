const service = require("../service/ProjectService.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant.js");
const ProjectService = require("../service/ProjectService.js");
const {STATUS_OK} = require("../constant/constant");

module.exports = {
    add: async (req, res, next) => {
        let project = await ProjectService.addProject(req, res);
        if (project !== null) {
            res.status(STATUS_CREATED).json(project).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    get: async (req, res) => {
        let project = await ProjectService.getProject(req, res);
        if (project !== null) {
            res.status(STATUS_OK).json(project).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    getProjectsForUser: async (req, res) => {
        let projects = await ProjectService.getProjectsForUser(req, res);
        if (projects !== null) {
            res.status(STATUS_OK).json(projects).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    }
};
