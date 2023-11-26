const router = require("express").Router();

const BugController = require("../controller/BugController.js");
const UserController = require("../controller/UserController.js");


router.post("/bug", BugController.add);

router.post("/user", UserController.add);


module.exports = router;