const dbConnect = require("./mongodb");

const insert = async () => {
  let db = await dbConnect();
  let data = await db.insertOne({
    name: "Apple",
    model: "i phone",
    price: 150000,
  });
  return data
};

insert();
