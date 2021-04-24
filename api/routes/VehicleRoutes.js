const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');

router.get('/vehicles', VehicleController.getAll);
router.post('/vehicles', VehicleController.insert);
module.exports = router;
