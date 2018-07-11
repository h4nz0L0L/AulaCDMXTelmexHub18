let express = require("express")
let app = express()
const path = require('path')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.render('hola')
})

app.listen(3000, function() { console.log('conectado al puerto 3000') })