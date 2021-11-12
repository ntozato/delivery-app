const { StatusCodes } = require('http-status-codes');

const uniqueConstraintError = (err, req, res, next) => {
  return res.status(StatusCodes.CONFLICT).json(err.errors[0].message);
}

module.exports = { uniqueConstraintError };