let mongo = require("mongodb")
let mongoCliente = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbname = 'telmextest'

mongoCliente.connect(url, function(err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbname)

    console.log("find all")
    db.collection('personas').find({}).toArray(function(err, data) {
        if (err) console.log(err)
        console.log(data)
    })

    db.collection('personas')
        .findOne({ name: 'jose' }, function(err, data) {
            console.log("FIND ONE")
            if (err) console.log(err)
            console.log(data)
        })
})