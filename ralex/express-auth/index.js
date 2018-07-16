// let express = require('express')
// let app = express()
// let bodyParser = require("body-parser")

// const path = require('path')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.use(express.static('public'))

// let controller = require('./controller')

// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))
const jwt = require('jsonwebtoken')

// Corran este primero

// jwt.sign(
//     {name: 'Ralex', credentials: 'user'},
//     'llave-secretísima',
//     function (err, token) {
//         if (err) console.log(err)
//         console.log(token)
//     }
// )

// Corran esto segundo
jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFsZXgiLCJjcmVkZW50aWFscyI6InVzZXIiLCJpYXQiOjE1MzE3NjUyNjZ9.9IPkPYjrZ30Oo4MNDcbABQ1RkEXSu03rkXo7c0wdqVc',
    'llave-secretísima',
    function (err, payload) {
        if (err) console.log(err)
        console.log(payload)
    }
)

// app.listen(3000, function () {console.log('Connected in port 3000')})