const {BUG} = require("../constant/constant.js");
const {parseForm} = require("../middleware/FormParser.js");

const router = require("express").Router();

const BugController = {
    add: require("../controller/BugController.js").add
};


router.post(BUG, parseForm, BugController.add);


module.exports = router;