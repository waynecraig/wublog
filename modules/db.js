const mongo = require('mongoskin')

const db = mongo.db("mongodb://localhost:27017/wublog", {native_parser:true})

db.bind('user')

module.exports = db
