const router = require("express").Router();

const BugController = require("../controller/BugController.js");


router.post("/bug", BugController.add);


module.exports = router;