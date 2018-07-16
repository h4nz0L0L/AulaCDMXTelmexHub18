function renderLogin (req, res) {
    res.render('login')
}
function renderRegister (req, res) {
    res.render('register')
}

function insertUser (req, res) {
    // conecta a la base de datos
    // jala datos de req.body y los mete en la colección users
    // cambias el password por el HASH del password con bcrypt
}
function login (req, res) {
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
    renderRegister
}