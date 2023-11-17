const router = require("express").Router();

const parseForm = require("../middleware/FormParser.js");

const BugController = require("../controller/BugController.js");


router.post("/bug", BugController.add);


module.exports = router;