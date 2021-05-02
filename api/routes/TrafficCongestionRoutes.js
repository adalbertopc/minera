const express = require('express');
const router = express.Router();
const TrafficCongestionController = require('../controllers/TrafficCongestionController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/congestions', verifyToken, TrafficCongestionController.getAll);
router.post('/congestions', verifyToken, TrafficCongestionController.insert);
module.exports = router;
