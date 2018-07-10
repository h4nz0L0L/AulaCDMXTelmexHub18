let mongo = require("mongodb")
let MongoClient = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmexArias'

MongoClient.connect(url, function(err, data) {
  if (err) throw err;
  const db = data.db(dbName)
  db.collection("personas")
  .find({})
  .toArray(function(err, data) {
    if (err) throw err;
    data.forEach( p => {
      console.log(`${p.name} ${p.lastname} tiene ${p.age} años y vive con ${p.pets}`)
    })
  });
});