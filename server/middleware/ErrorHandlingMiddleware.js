const ApiError = require('../error/ApiError');
const HTTP_INTERNAL_ERROR_CODE = 500;

module.exports = function (err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(HTTP_INTERNAL_ERROR_CODE).json({message: 'Internal error'});
}