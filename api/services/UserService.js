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
				statusCode: 500,
			};
		} else {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), {
					expiresIn: '1h',
				});
				return {
					error: false,
					status: 'success',
					message: 'user found!!!',
					data: { user, token: token },
				};
			} else {
				return {
					error: true,
					status: 'error',
					message: 'Invalid email/password!!!',
					data: null,
				};
			}
		}
	};
}

module.exports = UserService;
