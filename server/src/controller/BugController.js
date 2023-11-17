const {STATUS_CREATED} = require("../constant/constant");

module.exports = {
    add: (req, res, next) => {
        res.status(STATUS_CREATED)
            .send();
    }
}