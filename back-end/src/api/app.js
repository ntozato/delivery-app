const express = require('express');
const { registerRoute } = require('../routes/index');

const app = express();
app.use(express.json());

app.post('/register', registerRoute);

module.exports = app;
