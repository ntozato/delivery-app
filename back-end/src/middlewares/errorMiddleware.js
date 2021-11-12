const { StatusCodes } = require('http-status-codes');

const uniqueConstraintError = (err, req, res, _next) => 
res.status(StatusCodes.CONFLICT).json(err.errors[0].message);

module.exports = { uniqueConstraintError };