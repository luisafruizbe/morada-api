const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify')
const {login, signup } = require('../controllers/userCtrl')

router.post('/login', login);
router.post('/singup', authVerify,signup);

module.exports = router;