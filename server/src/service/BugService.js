const Bug = require("../model/bug");

module.exports = {
    addBug: async (request) => {
        let returnedBug = null;
        const body = request.body;

        if (body.description === undefined || body.commitLink === undefined || body.projectId === undefined
            || body.userId === undefined || body.status === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedBug;
        }

        if (body.severity !== "Harmless" && body.severity !== "Low" && body.severity !== "Medium"
            && body.severity !== "High" && body.severity !== "Critical") {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Invalid severity`);
            return returnedBug;
        }

        if (body.status !== "New" && body.status !== "In Progress" && body.status !== "Fixed"
            && body.status !== "Closed") {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Invalid status`);
            return returnedBug;
        }

        const { severity, description, commitLink, projectId, userId, status } = body;

        await Bug.create({
            severity: severity,
            description: description,
            commitLink: commitLink,
            projectId: projectId,
            userId: userId,
            status: status
        }).then(bug => {
            returnedBug = bug;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedBug;
    },

    getBug: async (request) => {
        let returnedBug = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedBug;
        }

        await Bug.findByPk(params.id).then(bug => {
            returnedBug = bug;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedBug;
    },

    getAllBugsForProject: async (request) => {
        let returnedBugs = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedBugs;
        }

        await Bug.findAll({
            where: {
                projectId: params.id
            }
        }).then(bugs => {
            returnedBugs = bugs;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedBugs;
    }
};