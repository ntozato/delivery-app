const express = require('express');
const { registerRoute } = require('../routes/index');
const { uniqueConstraintError } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.post('/register', registerRoute);
app.use(uniqueConstraintError);

module.exports = app;
