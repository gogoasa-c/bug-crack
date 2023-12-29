const router = require("express").Router();

const BugController = require("../controller/BugController.js");
const ProjectController = require("../controller/ProjectController.js");

router.post("/bug", BugController.add);
router.get("/bug/:id", BugController.get);
router.get("/bug/project/:id", BugController.getAll);

router.post("/project", ProjectController.add);
router.get("/project/:id", ProjectController.get);
router.get("/project/team/:id", ProjectController.getAll);

module.exports = router;