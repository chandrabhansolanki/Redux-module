const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log(`data send by the browser`,req.query.name)
  res.send("Hello these is Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hello these is About Page");
});


app.listen(5000)