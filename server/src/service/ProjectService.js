const Project = require('../model/project.js');

module.exports = {
    addProject: async (request) => {
        let returnedProject = null;
        const body = request.body;

        if (body.name === undefined || body.description === undefined || body.teamId === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedProject;
        }

        const {name, description, teamId} = body;

        await Project.create({
            name: name,
            description: description,
            teamId: teamId
        }).then(project => {
            returnedProject = project;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedProject;
    },

    getProject: async (request) => {
        let returnedProject = null;
        const params = request.params;

        if (params.id === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedProject;
        }

        await Project.findByPk(params.id).then(project => {
            returnedProject = project;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedProject;
    },

    getAllProjectsForTeam: async (request) => {
        let returnedProjects = null;
        const params = request.params;

        if (params.teamId === undefined) {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`);
            return returnedProjects;
        }

        await Project.findAll({
            where: {
                teamId: params.teamId
            }
        }).then(projects => {
            returnedProjects = projects;
        }).catch(error => {
            console.error(`[${new Date().toISOString()}]: Error whilst processing request: ${error}`);
        });

        return returnedProjects;
    }
};