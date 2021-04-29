const Controller = require('./Controller');
const TrafficCongestionService = require('../services/TrafficCongestionService');
const TrafficCongestion = require('../models/TrafficCongestion');

const trafficCongestionService = new TrafficCongestionService(
	new TrafficCongestion().getInstance()
);

class TrafficCongestionController extends Controller {
	constructor(service) {
		super(service);
	}
}

module.exports = new TrafficCongestionController(trafficCongestionService);
