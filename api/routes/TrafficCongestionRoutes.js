const express = require('express');
const router = express.Router();
const TrafficCongestionController = require('../controllers/TrafficCongestionController');

router.get('/congestions', TrafficCongestionController.getAll);
router.post('/congestions', TrafficCongestionController.insert);
module.exports = router;
