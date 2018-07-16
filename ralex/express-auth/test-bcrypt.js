const bcrypt = require('bcrypt-nodejs')

// bcrypt.hash('password123',null, null, function (err, hash) {
//     if (err) console.log(err)

//     console.log(hash)
// })

bcrypt.compare(
    'password123',
    '$2a$10$Kjhc8iZkTTvDlVQIsy97ZeRC5S9RSurP5Z3jK805JIsoSAGgGZqhu',
    function (err, valid) {
        if (err) console.log(err)
        console.log(valid)
    }
)