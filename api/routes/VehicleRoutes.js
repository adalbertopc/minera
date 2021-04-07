const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');

router.get('/api/vehicles', VehicleController.getAll);
router.post('/api/vehicles', VehicleController.insert);
module.exports = router;
