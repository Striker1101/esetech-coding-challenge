var express = require("express");
var router = express.Router();


const projectController = require("../controllers/projectController");
/* GET users listing. */

router.post("project", projectController.project_post);

router.get("project", projectController.project_get);

module.exports = router;
