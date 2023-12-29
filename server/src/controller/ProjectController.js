const ProjectService = require('../service/ProjectService');
const {STATUS_CREATED, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK} = require("../constant/constant");

module.exports = {
    add: async (req, res) => {
        let project = await ProjectService.addProject(req);
        if (project !== null) {
            res.status(STATUS_CREATED).json(project).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    get: async (req, res) => {
        let project = await ProjectService.getProject(req);
        if (project !== null) {
            res.status(STATUS_OK).json(project).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    getAll: async (req, res) => {
        let projects = await ProjectService.getAllProjectsForTeam(req);
        if (projects !== null) {
            res.status(STATUS_OK).json(projects).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    }
}