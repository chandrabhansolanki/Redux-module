const express= require("express")
const app = express()
// Application middleware are those middleware which can apply on all the routes 

const reqFilter=(req,res, next)=> {
    if(!req.query.age){
        res.send("Please Provide the age.")
    }else if (req.query.age < 18) {
        res.send('You are not allowed to access these Page.')
    }else{
        next()
    }
}

app.use(reqFilter)

app.get('/',(req, res)=>{
    res.send('Welcome to Home Page.')
})

app.get('/users',(req,res)=> {
    res.send('These is user page.')
})

app.listen(60000)