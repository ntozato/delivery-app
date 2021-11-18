const { StatusCodes } = require('http-status-codes');

const uniqueConstraintError = (err, req, res, next) => {
    if (err.errors[0].message) {
        return res.status(StatusCodes.CONFLICT).json(err.errors[0].message);
    }
    next();
};

const genericError = (err, req, res, _next) => 
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);

module.exports = { uniqueConstraintError, genericError };