const service = require("../service/UserService.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
    STATUS_OK,
    STATUS_BAD_REQUEST,
} = require("../constant/constant");
const UserService = require("../service/UserService.js");

module.exports = {
    add: async (req, res, next) => {
        let user = await UserService.addUser(req, res);
        if (user !== null) {
            res.status(STATUS_CREATED).json(user);
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    login: async (req, res, next) => {
        let id = await UserService.login(req, res);
        if (id) {
            res.status(STATUS_OK).json({ id });
        }
        res.status(STATUS_BAD_REQUEST).send();
    },
};
