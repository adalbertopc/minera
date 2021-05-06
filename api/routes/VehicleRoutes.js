const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/vehicles', verifyToken, VehicleController.getAll);
router.post('/vehicles', verifyToken, VehicleController.insert);
module.exports = router;
