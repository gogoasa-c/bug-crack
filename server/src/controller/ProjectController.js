const service = require("../service/ProjectService.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant.js");
const ProjectService = require("../service/ProjectService.js");

module.exports = {
    add: async (req, res, next) => {
        let project = await ProjectService.addProject(req, res);
        if (project !== null) {
            res.status(STATUS_CREATED).json(project).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },
};
