const Bug = require("../model/bug");
const {STATUS_CREATED, STATUS_INTERNAL_SERVER_ERROR} = require("../constant/constant");

module.exports = {
    addBug: (request, response) => {
        const { severity, description, commitLink, projectId, userId, status } = request.body;
        Bug.create({
            severity: severity,
            description: description,
            commitLink: commitLink,
            projectId: projectId,
            userId: userId,
            status: status
        }).then(bug => {
            response.status(STATUS_CREATED).json(bug).send();
        }).catch(error => {
            response.status(STATUS_INTERNAL_SERVER_ERROR).json(error).send();
        });
    }
};