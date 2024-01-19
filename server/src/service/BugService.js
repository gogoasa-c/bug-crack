const Bug = require("../model/bug");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant");

module.exports = {
    addBug: async (request) => {
        let returnedBug = null;
        const body = request.body;

        if (
            body.description === undefined ||
            body.commitLink === undefined ||
            body.projectId === undefined ||
            body.userId === undefined ||
            body.status === undefined ||
            body.severity === undefined
        ) {
            console.log(body)
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedBug;
        }

        if (
            body.severity !== "Harmless" &&
            body.severity !== "Low" &&
            body.severity !== "Medium" &&
            body.severity !== "High" &&
            body.severity !== "Critical"
        ) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Invalid severity`
            );
            return returnedBug;
        }

        if (
            body.status !== "New" &&
            body.status !== "In Progress" &&
            body.status !== "Fixed" &&
            body.status !== "Closed"
        ) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Invalid status`
            );
            return returnedBug;
        }

        const { severity, description, commitLink, projectId, userId, status } =
            body;

        await Bug.create({
            severity: severity,
            description: description,
            commitLink: commitLink,
            projectId: projectId,
            userId: userId,
            status: status,
        })
            .then((bug) => {
                returnedBug = bug;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedBug;
    },

    getBug: async (request) => {
        let returnedBug = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedBug;
        }

        await Bug.findByPk(params.id)
            .then((bug) => {
                returnedBug = bug;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedBug;
    },

    getAllBugsForProject: async (request) => {
        let returnedBugs = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedBugs;
        }

        await Bug.findAll({
            where: {
                projectId: params.id,
            },
        })
            .then((bugs) => {
                returnedBugs = bugs;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedBugs;
    },

    getBugsForUser: async (request) => {
        let returnedBugs = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedBugs;
        }

        await Bug.findAll({
            where: {
                userId: params.id,
            },
        })
            .then((bugs) => {
                returnedBugs = bugs;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedBugs;
    },

    updateBug: async (request) => {
        const body = request.body;
        const params = request.params;

        if (
            body.description === undefined ||
            body.commitLink === undefined ||
            body.status === undefined
        ) {
            console.log(body)
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return false;
        }

        if (
            body.severity !== "Harmless" &&
            body.severity !== "Low" &&
            body.severity !== "Medium" &&
            body.severity !== "High" &&
            body.severity !== "Critical"
        ) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Invalid severity`
            );
            return false;
        }

        if (
            body.status !== "New" &&
            body.status !== "In Progress" &&
            body.status !== "Fixed" &&
            body.status !== "Closed"
        ) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Invalid status`
            );
            return false;
        }

        try {
            const updatedBug = await Bug.update(
                {
                    severity: body.severity,
                    description: body.description,
                    commitLink: body.commitLink,
                    status: body.status,
                },
                {
                    where: {
                        id: params.id,
                    },
                }
            );

            if (updatedBug[0] === 0) {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: Bug not found`
                );
                return false;
            }

            return true;
        } catch (error) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
            );
            return false;
        }
    },

        

        //  await Bug.update(
        //     {
        //         severity: body.severity,
        //         description: body.description,
        //         commitLink: body.commitLink,
        //         status: body.status,
        //     },
        //     {
        //         where: {
        //             id: params.id,
        //         },
        //     }
        // );


};
