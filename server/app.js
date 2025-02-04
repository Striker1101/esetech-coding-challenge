var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const admin = require("firebase-admin");
const cors = require("cors");

const serviceAccount = require("./esetech-fcb5e-firebase-adminsdk-5plb5-fcd345e048.json");
var app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api", require("./routes/API"));

app.use("/api/auth", require("./routes/API/auth"));

app.use("/api/user", require("./routes/API/user"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // send error message as JSON
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      stack: err.stack,
    },
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
