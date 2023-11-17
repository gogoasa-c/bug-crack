const {BUG} = require("../constant/constant.js");
const router = require("express").Router();

const BugController = {
    add: require("../controller/BugController.js").add
};


router.post(BUG, BugController.add);


module.exports = router;