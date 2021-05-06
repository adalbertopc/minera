const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class Vehicle {
	initSchema() {
		const schema = new Schema({
			driver: {
				type: 'String',
			},
			type: {
				type: 'String',
			},
			content: { type: 'String' },
			lng: { type: 'Number' },
			lat: { type: 'Number' },
			dateStart: {
				type: 'Date',
			},
		});
		mongoose.model('Vehicle', schema);
	}

	getInstance() {
		this.initSchema();
		return mongoose.model('Vehicle');
	}
}

module.exports = Vehicle;
