const { getUser } = require('../services/auth');

const checkAuth = (req, res, next) => {

    const token = req.cookies?.sessionId;
    const user = getUser(token);

    req.user = user;

    next();

};

module.exports = checkAuth;