const reqFilter = (req,res, next) => {
    if(!req.query.age){
        res.send("Please Provide the age.")
    }else if(req.query.age < 18){
        res.send("Your age should be more than 18.")
    }
    else {
        next()
    }
}

module.exports = reqFilter