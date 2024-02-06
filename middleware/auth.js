const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};


