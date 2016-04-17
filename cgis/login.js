"use strict";

module.exports = function (req, res) {

    const username = req.query.username;
    const password = req.query.password;

    res.login({username, password}, function(err){
        if (err) {
            return res.json({code: -1, err: err});
        }
        return res.redirect('/');
    })

};
