const express = require('express');
const router = express.Router();
const dataControler = require('./../controller/data-controller');

router.post('/', dataControler.updateUserData);
router.get('/', dataControler.getUserData);

module.exports = router;