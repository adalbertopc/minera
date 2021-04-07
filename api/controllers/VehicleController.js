const Controller = require('./Controller');
const VehicleService = require('../services/VehicleService');
const Vehicle = require('../models/Vehicle');

const vehicleService = new VehicleService(new Vehicle().getInstance());

class VehicleController extends Controller {
	constructor(service) {
		super(service);
	}
}

module.exports = new VehicleController(vehicleService);
