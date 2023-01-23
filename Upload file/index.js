const express = require("express");
const multer = require("multer");
const { filename } = require("script/client");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    // cb stands for callback
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_profile");

app.post("/upload", upload, (req, res) => {
  res.send("file uploaded");
});

app.listen(9000);
