const Team = require("../model/team.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant.js");

module.exports = {
    addTeam: async (req, res) => {
        let returnedTeam = null;
        const body = req.body;

        if (body.name === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedTeam;
        }

        const { name } = body;

        await Team.create({
            name: name,
        })
            .then((team) => {
                returnedTeam = team;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedTeam;
    },

    getTeam: async (req, res) => {
        let returnedTeam = null;
        const params = req.params;

        if (params.id === undefined) {
            console.error(
                `[${new Date().toISOString()}]: Error whilst processing request: Missing parameters`
            );
            return returnedTeam;
        }

        await Team.findByPk(params.id)
            .then((team) => {
                returnedTeam = team;
            })
            .catch((error) => {
                console.error(
                    `[${new Date().toISOString()}]: Error whilst processing request: ${error}`
                );
            });

        return returnedTeam;
    },
};
