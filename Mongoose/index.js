const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://chandra:1994%40Bhan@cluster0.fqjjcv1.mongodb.net/e-comm?retryWrites=true&w=majority")


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    model: String,
    category: String
})

const saveInDb =async () => {
    const Product = mongoose.model('products', productSchema )
    let data = new Product({name:"google pixel", price:12000, model:"pixel 6", category:"mobile"})
    const result = await data.save()
    console.log(result);
}

// saveInDb()


const updateIndb = async() => {
    const Product = mongoose.model("products", productSchema)
    let data = await Product.updateOne({name:"Apple"},{$set:{price:150000, name:"nokia"}})
    // let result = await data.save()
    console.log(data);
}

// updateIndb()

const deleteInDb = async() => {
    const Product = mongoose.model("products", productSchema)
    let data = await Product.deleteOne({name:"google pixel"})
    console.log(data);
}


// deleteInDb()

const findInDb = async() => {
    const Product = mongoose.model("products", productSchema)
    let data = await Product.find()
    console.log(data);

}
findInDb()