require('dotenv').config();
const jwt = require('jsonwebtoken');

const path = require('path');

const keyFile = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const secret = require('fs')
.readFileSync(keyFile, { encoding: 'utf-8' }).trim();

const { findUser } = require('./userServices');

const jtwConfig = {
  expiresIn: '25m',
  algorithm: 'HS256',
};

const generateUserToken = async ({ email }) => {
  const user = await findUser({ email });
  const token = jwt.sign({ data: { email } }, secret, jtwConfig);
  user.token = token;
  return user;
};

module.exports = { generateUserToken };
