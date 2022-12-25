const { log } = require("console")
const fs = require("fs")
const path =require("path")
const dirPath = path.join(__dirname,"curd")
const filePath = `${dirPath}/curd.txt`

// how we can create a file in node js
// fs.writeFileSync(filePath, `these is a curd operation on node js`)

// how we can read a file in node js
// fs.readFile(filePath,'utf-8',(err, data)=> {
//     console.log(data);
// })

// how we can update the file in node js

// fs.appendFile(filePath,' .These is a new data we added', (err)=>{
// if(!err) console.log("data is added");
// })


// how we can rename a file in node js
// fs.rename(filePath, `${dirPath}/namechange.txt`, (err)=>{
//     if(!err) console.log("file name is changed");
// })


// how we can delete a file in nodejs
fs.unlink(`${dirPath}/namechange.txt`, (err)=> {
    console.log("file is deleted");
})