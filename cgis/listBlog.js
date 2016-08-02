const Blog = require('../modules/db').blog;

module.exports = (req, res) => {

    const body = req.body;
    const skip  = body.skip || 0;
    const limit = body.limit || 10;

    Blog.find({isDraft:false}).skip(skip).limit(limit).toArray((err, items) => {
        res.json({err, items});
    })

}
