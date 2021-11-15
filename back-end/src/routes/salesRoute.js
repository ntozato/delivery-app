const express = require('express');

const router = express.Router();

const controller = require('../controllers/salesController');

router.post('/', controller.createSale);

module.exports = router;