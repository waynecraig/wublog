const Blog = require('../modules/db').blog;

module.exports = (req, res) => {

    const body = req.body;
    const title = body.title;
    const content = body.content;
    const isDraft = !!body.isDraft;

    if (!title || !content) {
        res.json({err: 'missing title or content'});
    }

    Blog.insert({title, content, isDraft}, {w:1}, (err, result)=>{
        res.json({err, result});
    });

}
