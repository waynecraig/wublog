module.exports = (req, res) => {
    res.json({
        code: 0,
        info: req.user.username
    })
}
