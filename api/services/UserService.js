const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Service = require('./Service');
class UserService extends Service {
	constructor(model) {
		super(model);
	}

	authenticate = async (req, res, next) => {
		const user = await this.model.findOne({ username: req.body.username });
		if (!user || user === null) {
			return {
				error: true,
				status: 'error',
				message: 'User dont found ',
				data: null,
				statusCode: 502,
			};
		}
		//
		const { _id, username, password, firstName, userType } = user;
		if (bcrypt.compareSync(req.body.password, password)) {
			const token = jwt.sign(
				{ id: _id, username, firstName, userType },
				req.app.get('secretKey'),
				{
					expiresIn: '1h',
				}
			);
			return {
				error: false,
				status: 'success',
				message: 'user found!!!',
				data: { user: { username, firstName, userType }, token: token },
				statusCode: 200,
			};
		} else {
			return {
				error: true,
				status: 'error',
				message: 'Invalid email/password!!!',
				data: null,
				statusCode: 500,
			};
		}
	};
}

module.exports = UserService;
