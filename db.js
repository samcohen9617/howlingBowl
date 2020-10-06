const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://scohen:<Stickman96!mongodb>@cluster0.e2ihb.mongodb.net/<HowlingBowlTestDB>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});