const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ status: "running", message: "Server is up and running" });
});
app.get("/text", (req, res) => {
  let text = fs.readFileSync("./data/text.json");
  text = JSON.parse(text);
  res.status(200).json(text);
});
app.get("/keywords", (req, res) => {
  let keywords = fs.readFileSync("./data/keywords.json");
  keywords = JSON.parse(keywords);
  res.status(200).json(keywords);
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});
