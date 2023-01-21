const connectToMongo = require('./db')
const express = require("express")
const Product = require('./product')
const app = express()

connectToMongo()

app.get('/search/:key', async (req, res) => {
    // let datas = await connectToMongo()
    console.log(req.params.key);
    let datas = await Product.find(
        {
            "$or": [
                {"name" : {$regex: req.params.key}},
                {"price" : {$regex: req.params.key}},
                {"model" : {$regex: req.params.key}},

            ]
        }
    )
    res.send(datas)
})


app.listen(9000)