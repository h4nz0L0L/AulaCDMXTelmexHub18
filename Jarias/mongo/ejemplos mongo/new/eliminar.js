let mongo = require("mongodb")
let mongoClient = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

mongoClient.connect(url, function(err,con){
    if (err) console.log(err)
    console.log("imprimir")
    const db = con.db(dbName)
db.collection('personas').remove()
    console.log("eliminados")

})