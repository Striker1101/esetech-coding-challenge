const { body, validationResult } = require("express-validator");
const async = require("async");

exports.project_get = function (req, res, next) {};

exports.project_post = [
  body("text", "text space must be filled")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    const { text, image } = req.body;
  },
];
