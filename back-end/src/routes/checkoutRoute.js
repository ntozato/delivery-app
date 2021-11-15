const express = require('express');

const router = express.Router();

const controller = require('../controllers/checkoutController');

router.post('/', controller.createSale);
router.post('/', controller.createSalesProducts);

module.exports = router;