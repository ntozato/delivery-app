const express = require('express');

const router = express.Router();

const controller = require('../controllers/salesProductsController');

router.post('/', controller.createSalesProducts);

module.exports = router;