const dbConnect = require('./mongodb')

// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb+srv://chandra:1994%40Bhan@cluster0.fqjjcv1.mongodb.net/Company?retryWrites=true&w=majority";
// const database = "e-comm";
// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("products");
//   return collection;
// }

// dbConnect().then((res) => {
//   res
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data, "data");
};
main();
