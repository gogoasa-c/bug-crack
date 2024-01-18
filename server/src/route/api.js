const router = require("express").Router();
const cors = require("cors");

// Enable CORS for all routes
router.use(cors());

const BugController = require("../controller/BugController.js");
const UserController = require("../controller/UserController.js");
const TeamController = require("../controller/TeamController.js");
const ProjectController = require("../controller/ProjectController.js");

router.post("/bug", BugController.add);
router.get("/bug/:id", BugController.get);
router.get("/bug/project/:id", BugController.getAllBugsForProject);

router.post("/user", UserController.add);
router.post("/user/login", UserController.login);

router.post("/team", TeamController.add);
router.get("/team/:id", TeamController.get);

router.post("/project", ProjectController.add);
router.get("/project/:id", ProjectController.get);

module.exports = router;
