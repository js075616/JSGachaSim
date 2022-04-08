const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
// const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/summon", require("./routes/summonRoutes"));
app.get("/api/users", function (req, res) {
  res.json({ users: "allUsers" });
});
// app.use(errorHandler);

module.exports = app;
