const express = require('express');

const router = express.Router();

const controller = require('../controllers/salesProductsController');

router.post('/', controller.createSalesProducts);
router.get('/:id', controller.getSalesProducts);

module.exports = router;