const express = require('express')
const router = express.Router()
const prosaController = require('../controller/prosaController')

router.get('/', prosaController.home);
router.get('/contrate', prosaController.contrate);
router.get('/login', prosaController.login);


module.exports = router