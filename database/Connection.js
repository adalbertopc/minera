const mongoose = require('mongoose');

class Connection {
	constructor() {
		const url = process.env.MONGODB_URI || `mongodb://localhost:27017/MINERA_TEST`;
		console.log('Establish new connection with url', url);
		mongoose.Promise = global.Promise;
		mongoose.set('useNewUrlParser', true);
		mongoose.set('useFindAndModify', false);
		mongoose.set('useCreateIndex', true);
		mongoose.set('useUnifiedTopology', true);
		mongoose.connect(url);
	}
}

module.exports = new Connection();
