let mongo = require("mongodb")
let mongoCliente = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbname = 'telmextest'

mongoCliente.connect(url, function(err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbname)

    db.collection('personas').insertMany([{
        name: 'juan',
        apellido: 'gabriel',
        edad: 15,
        mascota: 'perro'
    }, {
        name: 'raul',
        apellido: 'perez',
        edad: 21,
        mascota: 'gato'
    }, {
        name: 'robert',
        apellido: 'prieto',
        edad: 45,
        mascota: 'pez'
    }, {
        name: 'josefina',
        apellido: 'ortiz',
        edad: 50,
        mascota: 'ratas'
    }, {
        name: 'miguel',
        apellido: 'hidalgo',
        edad: 72,
        mascota: 'sarigueya'
    }], { multi: true }, function(err, data) {
        console.log(data)
    })

})