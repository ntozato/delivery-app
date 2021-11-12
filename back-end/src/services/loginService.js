require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = 'group13';
const jtwConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => {
  const token = jwt.sign({ data: { email } }, secret, jtwConfig);
  return token;
};
module.exports = { generateToken };
