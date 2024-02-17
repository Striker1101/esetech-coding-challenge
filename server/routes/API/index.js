var express = require("express");
var router = express.Router();

// Sample data
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

module.exports = router;
