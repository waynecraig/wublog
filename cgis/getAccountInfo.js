module.exports = (req, res) => {
    res.json({
        info: req.user.username
    })
}
