const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();
const path = require('path');

const keyFile = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');
const secret = require('fs')
.readFileSync(keyFile, { encoding: 'utf-8' }).trim();
const { user } = require('../../database/models');

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
      if (!token) {
          return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'missing auth token' });
        }
        const payload = jwt.verify(token, secret);
        const userFound = await user.findOne({ where: { email: payload.data.email } });
    if (!userFound) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'jwt malformed' });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = validateJWT;
