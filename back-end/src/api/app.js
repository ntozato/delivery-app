const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/login.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.get('/coffee', (_req, res) => res.status(418).send('ok'));

module.exports = app;
