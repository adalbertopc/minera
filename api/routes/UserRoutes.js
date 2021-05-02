const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const passwordEncrypt = require('../middlewares/passwordEncrypt');
const verifyToken = require('../middlewares/verifyToken');

router.get('/user', verifyToken, UserController.getAll);
router.post('/user', passwordEncrypt, UserController.insert);
router.post('/user/auth', UserController.authenticate);
router.get('/user/auth', verifyToken, (req, res) => {
	res.json({
		success: true,
		message: 'Token is valid',
		username: req.user.username,
		firstName: req.user.firstName,
	});
});

module.exports = router;
