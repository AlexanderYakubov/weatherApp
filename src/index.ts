console.log("Hello world!");

import express from "express";
var app = express();
const port = 4000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

// const a = 500;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});