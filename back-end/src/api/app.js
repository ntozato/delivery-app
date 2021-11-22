const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
});

const { registerRoute,
    loginRoute,
    custumerRoute,
    salesRoute,
    salesProductsRoute,
    usersRoute,
    productRoute,
} = require('../routes/index');
const { uniqueConstraintError, genericError } = require('../middlewares/errorMiddleware');

app.use(express.json());
app.use(cors());

require('../sockets/checkout')(io);

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/custumer', custumerRoute);
app.use('/sales', salesRoute);
app.use('/salesProducts', salesProductsRoute);
app.use('/users', usersRoute);
app.use('/images', express.static(path.resolve(__dirname, '..', '..', 'public', 'images')));
app.use('/products', productRoute);

app.use(uniqueConstraintError, genericError);

module.exports = http;
