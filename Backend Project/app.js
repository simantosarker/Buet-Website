const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("eakanto");
});

module.exports = app;
