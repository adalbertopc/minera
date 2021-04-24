const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('dotenv').config();
const PORT = process.env.PORT || 3000;

require('./database/Connection');
//JSON MIDDLEWARE
app.use(express.json());

//API ROUTES
app.use('/api', require('./api/routes/VehicleRoutes'));
app.use('/api', require('./api/routes/UserRoutes'));

//connection event
io.on('connection', (socket) => {
	console.log('connected', socket.id);
	socket.on('move-car-forward', (args) => {
		io.emit('car-movement-history', args);
	});

	socket.on('change-traffic-light', ({ id, state }) => {
		io.emit('update-traffic-lights', { id, state: !state });
	});
});

//turn on server
server.listen(PORT, () => {
	console.log('Server on port ' + PORT);
});
