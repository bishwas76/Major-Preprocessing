// Importing mongodb
const { MongoClient } = require("mongodb");

// file save
const fs = require("fs");

// dotenv
require("dotenv").config();

let mongoConnect = () => {
  return MongoClient.connect(process.env.uri, { useUnifiedTopology: true });
};

let getFile = (client) => {
  const db = client.db(process.env.dbName);
  const collection = db.collection(process.env.dbCollection);
  const result = collection.find({}).toArray();
  return new Promise((resolve, reject) => {
    resolve(result);
  });
};

mongoConnect().then((client) => {
  getFile(client)
    .then((value) => {
      fs.writeFile("./data.json", JSON.stringify(value), (err, done) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File Has been written");
        }
      });
    })
    .finally(() => client.close());
});
