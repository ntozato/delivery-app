const express = require('express');

const app = express();
const { registerRoute } = require('../routes/index');

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', registerRoute);

module.exports = app;
