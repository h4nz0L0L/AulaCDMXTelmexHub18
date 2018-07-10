let mongo = require("mongodb")
let mongoClient = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

mongoClient.connect(url, function(err,con){
    if (err) console.log(err)

    console.log("conected succesfully to server")

    const db = con.db(dbName)

    
    db.collection('personas').find({}).toArray(function (err, data){
        if(err)console.log(err)
        console.log(data)
    })

    // db.collection('personas').findOne({name:'Pablo'},function (err, data){
        
    //     console.log("FIND ONE ")
    //     if(err)console.log(err)
    //     console.log(data)
    // }
