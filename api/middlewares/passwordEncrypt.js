const bcrypt = require('bcrypt');

const passwordEncrypt = async (req, res, next) => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	req.body = { ...req.body, password: hashPassword };
	next();
};

module.exports = passwordEncrypt;
