const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class TrafficCongestion {
	initSchema() {
		const schema = new Schema({
			id: {
				type: 'String',
				required: true,
			},
			description: {
				type: 'String',
			},
			coords: ['Number'],
			date: {
				type: 'Date',
			},
		});
		mongoose.model('TrafficCongestion', schema);
	}

	getInstance() {
		this.initSchema();
		return mongoose.model('TrafficCongestion');
	}
}

module.exports = TrafficCongestion;
