const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://chandra:1994%40Bhan@cluster0.fqjjcv1.mongodb.net/e-comm?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI,()=>{
        console.log("mongo DB connected successfully");
    })
}

module.exports = connectToMongo