const bodyParser = require("body-parser");

module.exports = (req, res, next) => {
    bodyParser.urlencoded({extended: false});
    return next();
};