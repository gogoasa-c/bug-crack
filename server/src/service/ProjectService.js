const Project = require("../model/project.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant.js");

module.exports = {
    addProject: async (req, res) => {
        let returnedProject = null;
        const body = req.body;

        if (body.description === undefined || body.repo === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedProject;
        }

        const { description, repo } = body;

        await Project.create({
            description: description,
            repo: repo,
        })
            .then((project) => {
                returnedProject = project;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });
    },
};
