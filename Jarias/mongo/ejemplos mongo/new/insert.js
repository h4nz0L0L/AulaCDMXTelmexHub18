let mongo = require("mongodb")
let mongoClient = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmexArias'
const myObj = require('./datos'); 
mongoClient.connect(url, function(err,con){
    if (err) console.log(err)

    console.log("conected succesfully to server")

    const db = con.db(dbName)
    
    
    db.collection('personas').insertMany(myObj,
        function (err,data){
        console.log(data)
    })
})