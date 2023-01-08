const { log } = require("console")
const express = require("express")
const { appendFile } = require("fs")
const path = require("path")

const app = express()
// console.log(app)
const dirPath = (path.join(__dirname,"public"))
// console.log(dirPath);


app.use(express.static(dirPath))

app.listen(5000)