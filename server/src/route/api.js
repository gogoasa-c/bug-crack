const router = require("express").Router();

const BugController = require("../controller/BugController.js");


router.post("/bug", BugController.add);
router.get("/bug/:id", BugController.get);
router.get("/bug/project/:id", BugController.getAllBugsForProject);


module.exports = router;