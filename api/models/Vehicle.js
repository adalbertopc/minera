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
			content: {
				type: ['Mixed'],
			},
			coords: {
				x: {
					type: 'Number',
				},
				y: {
					type: 'Number',
				},
			},
			isCompleted: {
				type: 'Boolean',
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
