const express = require('express');
const loginRoute = require('../routes/login.route');

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
