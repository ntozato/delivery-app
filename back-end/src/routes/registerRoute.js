const express = require('express');
const validateJWT = require('../middlewares/auth/validateJWT');

const router = express.Router();
const controller = require('../controllers/registerController');

router.post('/', controller.createUser);
router.post('/admin', validateJWT, controller.createUser);

module.exports = router;