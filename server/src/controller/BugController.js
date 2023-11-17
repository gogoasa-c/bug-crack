const service = require("../service/BugService.js");
const {STATUS_CREATED} = require("../constant/constant");


module.exports = {
    add: (req, res, next) => {
        // business logic, calling the service responsible

        res.status(STATUS_CREATED)
            .send();
    }
}