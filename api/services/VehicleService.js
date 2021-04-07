const Service = require('./Service');

class VehicleService extends Service {
	constructor(model) {
		super(model);
	}
}

module.exports = VehicleService;
