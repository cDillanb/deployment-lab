const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.js"));
});

app.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
