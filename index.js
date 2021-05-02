const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const Sockets = require('./sockets/models/sockets');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

require('./database/Connection');
//JSON MIDDLEWARE
app.use(express.json());
app.use(cors());
//JWT JsonWebToken
app.set('secretKey', process.env.TOKEN_KEY || 'nodeRestApi'); // jwt secret token

//API ROUTES
app.use('/api', require('./api/routes/VehicleRoutes'));
app.use('/api', require('./api/routes/UserRoutes'));
app.use('/api', require('./api/routes/TrafficCongestionRoutes'));

new Sockets(io);

//turn on server
server.listen(PORT, () => {
	console.log('Server on port ' + PORT);
});
