
const fs = require('fs')
const path = require("path")
const dirPath = path.join(__dirname,"newfolder")
// fs.writeFileSync("text.txt", "file is created.")

// creating a file with help of for loop
for (let i = 0;i<5;i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,`5 files and folder created.`)
}
// console.log(dirPath);


// how we can read a file from a directory

// fs.readdir(dirPath, (err,folder)=> {
//     folder.forEach((item) =>{
//         console.log(item);
//     })
// })

// how we can find a file from a folder with its extension 
const a = fs.readdirSync(dirPath)
 a.forEach((item)=>{
    if(path.extname(item) == ".js"){
        console.log(item);
    }
 })
// console.log(a, b);