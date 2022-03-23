const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/info", (req, res) => {
  res.json({
    name: "Mern",
    version: "1.0.0",
  });
});
