const Controller = require('./Controller');
const UserService = require('../services/UserService');
const User = require('../models/User');

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
	constructor(service) {
		super(service);
	}

	authenticate = async (req, res, next) => {
		const response = await this.service.authenticate(req, res, next);
		if (response.error) return res.status(response.statusCode).send(response);
		return res.status(201).send(response);
	};
}

module.exports = new UserController(userService);
