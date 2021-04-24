const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class User {
	initSchema() {
		const schema = new Schema({
			firstName: {
				type: 'String',
				required: true,
			},
			lastName: {
				type: 'String',
			},
			username: {
				type: 'String',
				required: true,
			},
			password: {
				type: 'String',
				required: true,
			},
			userType: {
				type: 'String',
				required: true,
			},
		});
		mongoose.model('User', schema);
	}

	getInstance() {
		this.initSchema();
		return mongoose.model('User');
	}
}

module.exports = User;
