const Blog = require('../modules/db');

module.exports = (req, res) => {

    const body = req.body;
    const title = body.title;
    const content = body.content;
    const isDraft = !!body.isDraft;

    if (!title || !content) {
        res.json({code: 1, msg: 'missing title or content'});
    }

    Blog.insert({title, content, isDraft});

}
