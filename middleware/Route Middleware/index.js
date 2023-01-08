const express = require('express')
const app = express()
const reqFilter= require('./middleware')
const route = express.Router()

// Route middleware are those middleware which we can apply on a single route or as many as we want.
// const reqFilter = (req,res, next) => {
//     if(!req.query.age){
//         res.send("Please Provide the age.")
//     }else if(req.query.age < 18){
//         res.send("Your age should be more than 18.")
//     }
//     else {
//         next()
//     }
// }
route.use(reqFilter)


app.get('/',(req,res)=> {
    res.send('Good Morning these is home page.')
})

route.get('/about', (req,res)=> {
    res.send('These is aboutus page.')
})
route.get('/contact', (req, res)=>{
    res.send('Welcome to Contact page')
} 
)
app.use('/', route)

app.listen(5000)