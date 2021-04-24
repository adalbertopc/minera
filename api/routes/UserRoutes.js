const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/user', UserController.getAll);
router.post('/user', UserController.insert);

module.exports = router;
