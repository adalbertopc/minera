const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

require('./database/Connection');
//Send index html file
app.get('/', (req, res) => {
	res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/traffic-control', (req, res) => {
	res.status(200).sendFile(__dirname + '/public/trafficLights.html');
});

//allow to use every file in public folder
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(require('./api/routes/VehicleRoutes'));

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
