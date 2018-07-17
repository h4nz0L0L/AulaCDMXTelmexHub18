let bcrypt = require('bcrypt-nodejs')
let mongo = require('mongodb')
let client = mongo.MongoClient
let url = 'mongodb://localhost:27017'
let dbName = 'telmex'

function renderLogin (req, res) {
    res.render('login')
}
function renderRegister (req, res) {
    res.render('register')
}

function insertUser (req, res) {
    let body = req.body
    bcrypt.hash(body.password, null, null, function (err, hash) {
        if (err) console.log(err)
        body.password = hash
        client.connect(url, function (err, conn) {
            if (err) console.log(err)
            let db = conn.db(dbName)
            db.collection('users').insert(
                body,
                function (err, data) {
                    res.send(data)
                }
            )
        })
    })
}

function login (req, res) {
    console.log('login')
    res.send('login')
    // conecta a la base de datos
    // Busca (find) el documento de users que tiene el email
    // compara usando bcrypt.compare req.body.password con El password del documento que regresa el find (HASH)
    // Si da true regreso "Autenticación correcta"
    // Si no, regresa "Error de Autenticación"

    // PLUS: guardar los datos del usario con JWT en la cookie
    // Generar el token y ese lo regresan en la cookie
    // res.status(200)
    //     .cookie('token', signedToken, { maxAge: 86400 })            
    //     .send(/* ... */);
}

module.exports = {
    renderLogin,
    renderRegister,
    insertUser,
    login
}