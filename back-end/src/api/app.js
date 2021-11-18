const express = require('express');
const cors = require('cors');
const path = require('path');
const { registerRoute,
    loginRoute,
    custumerRoute,
    salesRoute,
    salesProductsRoute,
    usersRoute,
    productRoute,
} = require('../routes/index');
const { uniqueConstraintError, genericError } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/custumer', custumerRoute);
app.use('/sales', salesRoute);
app.use('/salesProducts', salesProductsRoute);
app.use('/users', usersRoute);
app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'public', 'images')));
app.use('/products', productRoute);

app.use(uniqueConstraintError, genericError);

module.exports = app;
