const Controller = require('./Controller');
const UserService = require('../services/UserService');
const User = require('../models/User');

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
	constructor(service) {
		super(service);
	}
}

module.exports = new UserController(userService);
