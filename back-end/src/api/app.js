const express = require('express');
const cors = require('cors');
const { registerRoute, loginRoute, costumerRoute } = require('../routes/index');
const { uniqueConstraintError } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/costumer', costumerRoute);

app.use(uniqueConstraintError);

module.exports = app;
