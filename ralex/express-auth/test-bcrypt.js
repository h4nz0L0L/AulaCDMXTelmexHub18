const bcrypt = require('bcrypt-nodejs')

// bcrypt.hash('password123',null, null, function (err, hash) {
//     if (err) console.log(err)

//     console.log(hash)
// })
// bcrypt.hash('password123',null, null, function (err, hash) {
//     if (err) console.log(err)

//     console.log(hash)
// })

bcrypt.compare(
    'password123',
    '$2a$10$qDTkioV4hoWuFVCdiRmXweUSjf0mpdmm5fD694PDJ1dd7CVOYa17e',
    function (err, valid) {
        if (err) console.log(err)
        console.log(valid)
    }
)
bcrypt.compare(
    'password123',
    '$2a$10$Kcanh5ggGOhd2fMaps53YOJtRwl4MWcv6uobrvfnhHR2EqUatVZAe',
    function (err, valid) {
        if (err) console.log(err)
        console.log(valid)
    }
)