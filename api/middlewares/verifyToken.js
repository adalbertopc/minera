const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const token = req.header('auth-token');

	if (!token) return res.status(401).json({ message: 'Access denied' });
	try {
		const verified = jwt.verify(token, req.app.get('secretKey'));
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).json({ error: 'Token is not valid' });
	}
};

module.exports = verifyToken;
