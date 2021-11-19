const express = require('express');
const validateJWT = require('../middlewares/auth/validateJWT');

const router = express.Router();

const controller = require('../controllers/salesController');

router.post('/', validateJWT, controller.createSale);
router.get('/user', controller.allSalesByUser);
router.get('/:id', controller.getSale);
router.put('/:id', controller.updateSaleStatus);

module.exports = router;