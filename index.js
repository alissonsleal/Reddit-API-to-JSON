const express = require("express");
const app = express();
const port = 1337;

const redditJSON = require("redditJSON2.json");

app.get("/", (req, res) => {
  res.json(redditJSON);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
