let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)

    // Imprime todos los documentos de la colección "personas"
    db.collection('personas')
    .find({})
    .toArray(function (err, data) {
        console.log("FIND ALL")
        if (err) console.log(err)
        console.log(data)
    })

    // imprima solo un documento para la persona que se llama "Pablo"
    db.collection('personas')
    .findOne({name: 'Pablo'}, function (err, data) {
        console.log("FIND ONE")
        if (err) console.log(err)
        console.log(data)
    })
})