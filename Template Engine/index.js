const express = require("express")
const path = require("path")

const app = express()
const dirPath = (path.join(__dirname,"public"))

// when we are useing TEMPLATE ENGINE we have to create a folder name of "VIEWS"  
app.set("view engine", 'ejs' )

// app.use(express.static(dirPath))
app.get('',(req, res)=>{
 res.sendFile(`${dirPath}/index.html`)
})

app.get('/profile',(req, res)=>{
    const user = {
        name: "chanda bhan singh",
        email: "test@gmail.com",
        city: "jodhpur",
        skills: ["java","phython", "c++", "javaScript", "React Js", "React Native","angular"]
    }

    res.render("profile",{user})
   })

  app.get("/login",(req,res)=>{
res.render("login")
  })

app.get('/about',(req, res)=>{
    res.sendFile(`${dirPath}/about.html`)
   })

   app.get('*',(req, res)=>{
    res.sendFile(`${dirPath}/pageNoteFound.html`)
   })   

app.listen(5000)