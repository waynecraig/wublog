module.exports = function (req, res) {
    res.end('ok'+req.user.username);
}
