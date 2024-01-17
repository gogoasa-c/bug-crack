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
    },
};
