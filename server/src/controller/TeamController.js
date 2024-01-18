const service = require("../service/TeamService");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant");
const TeamService = require("../service/TeamService");

module.exports = {
    add: async (req, res, next) => {
        let team = await TeamService.addTeam(req, res);
        if (team !== null) {
            res.status(STATUS_CREATED).json(team).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    get: async (req, res) => {
        let team = await TeamService.getTeam(req, res);
        if (team !== null) {
            res.status(STATUS_OK).json(team).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },
};
