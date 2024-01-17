const router = require("express").Router();

const BugController = require("../controller/BugController.js");
const UserController = require("../controller/UserController.js");

router.post("/bug", BugController.add);
router.get("/bug/:id", BugController.get);
router.get("/bug/project/:id", BugController.getAllBugsForProject);

router.post("/user", UserController.add);

router.post("/team", TeamController.add);

router.post("/project", ProjectController.add);

module.exports = router;
