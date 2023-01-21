const connectToMongo = require('./db')
const express = require('express')
const Product =require('./product')
const app = express()
const port = process.env.PORT || 9000
app.use(express.json())
connectToMongo()


app.post('/create', async(req,res)=> {
    let data = new Product(req.body)
    console.log(data);
    let result = await data.save()
    console.log(result);
    res.send(result)
})

app.get('/list',async(req,res)=> {
    let data = await Product.find()
    res.send(data)
})

app.delete('/delete/:_id', async(req, res) => {
    let data = await Product.deleteOne({_id: req.params})
    res.send(data)
})

app.put('/update/:id', async (req, res)=> {
    data= await Product.updateOne({_id:req.params.id}, {$set:req.body})
    console.log(data);
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})