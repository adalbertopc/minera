const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const passwordEncrypt = require('../middlewares/passwordEncrypt');

router.get('/user', UserController.getAll);
router.post('/user', passwordEncrypt, UserController.insert);

module.exports = router;
