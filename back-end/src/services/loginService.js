require('dotenv').config();
const jwt = require('jsonwebtoken');

const path = require('path');

const keyFile = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const secret = require('fs')
  .readFileSync(keyFile, { encoding: 'utf-8' }).trim();

const jtwConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => {
  const token = jwt.sign({ data: { email } }, secret, jtwConfig);
  return token;
};

module.exports = { generateToken };
