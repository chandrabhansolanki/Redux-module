const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://chandra:1994%40Bhan@cluster0.fqjjcv1.mongodb.net/e-comm?retryWrites=true&w=majority";
const database = "e-comm";
const client = new MongoClient(url);


async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("products");
    return collection;
    // let response = await collection.find({}).toArray()
    // console.log(response);
  }


module.exports = dbConnect