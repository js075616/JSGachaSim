const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
// const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
