const service = require("../service/UserService.js");
const {
    STATUS_CREATED,
    STATUS_INTERNAL_SERVER_ERROR,
} = require("../constant/constant");
const UserService = require("../service/UserService.js");

module.exports = {
    add: async (req, res, next) => {
        let user = await UserService.addUser(req, res);
        if (user !== null) {
            res.status(STATUS_CREATED).json(user).send();
            return;
        }

        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },

    login: async (req, res, next) => {
        let permission = await UserService.loginUser(req, res);
        if (permission) {
            res.status(STATUS_OK).send();
        }
        res.status(STATUS_INTERNAL_SERVER_ERROR).send();
    },
};
