const jwt = require('jsonwebtoken');
const HTTP_UNAUTHORIZED_CODE = 401;

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(HTTP_UNAUTHORIZED_CODE).json({message: " Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch(error) {
        res.status(HTTP_UNAUTHORIZED_CODE).json({message: ' Unauthorized'})
    }
}