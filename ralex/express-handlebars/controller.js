let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

function findBlogByNum (req, res) {
    client.connect(url, (err, conn) => {
        if (err) console.log(err)
        let db = conn.db(dbName)
        db.collection('blogs')
        .findOne(
            {num: req.params.num},
            function (err, data) {
                res.render('blog', data)
            }
        )
    })
}

function renderNewBlog (req, res) {
    console.log('renderNewBlog')
    res.render('new-blog')
}

function insertBlog (req, res) {
    console.log('kajhsdkjasd')
    client.connect(url, (err, conn) => {
        if (err) console.log(err)
        let db = conn.db(dbName)        
        db.collection('blogs')
        .insert(
            req.body,
            function (err, data) {
                console.log(data)
                res.render('blog', data.ops)
            }
        )
    })
}

module.exports = {
    findBlogByNum,
    renderNewBlog,
    insertBlog
}