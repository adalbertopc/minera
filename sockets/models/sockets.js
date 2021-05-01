const Carga = require('./carga');
const Marcadores = require('./marcadores');
const Sonas = require('./sonas');

class Sockets {
	constructor(io) {
		this.io = io;
		this.marcadores = new Marcadores();
		this.sonas = new Sonas();
		this.socketEvents(this.io);
	}

	socketEvents = (io) => {
		// On connection
		io.on('connection', (socket) => {
			console.log('Cliente conectado');

			socket.on('change-traffic-light', ({ id, state }) => {
				io.emit('update-traffic-lights', { id, state: !state });
			});

			socket.emit('marcadores-activos', this.marcadores.marcadoresActivos());

			socket.emit('sonas-activas', this.sonas.activos); // enviamos las sonas guardadas
			// pero truena en addLayer no se por que xd

			socket.on('agregar-entrega', (idCarro, infoCarga) => {
				const carro = this.marcadores
					.marcadoresActivos()
					.find((elemento) => elemento.id == idCarro);
			});

			socket.on('marcador-nuevo', (marcador) => {
				this.marcadores.agregarMarcador(marcador);
				socket.broadcast.emit('marcador-nuevo', marcador);
			});

			socket.on('marcador-actualizado', (marcador) => {
				this.marcadores.actualizarMarcador(marcador);
				socket.broadcast.emit('marcador-actualizado', marcador);
			});

			socket.on('sona-nueva', (sona) => {
				if (!(sona.type === null || sona.type === undefined || !sona.type)) {
					this.sonas.agregarSona(sona);
					socket.broadcast.emit('sona-nueva', sona);
				}
			});
		});
	};
}

module.exports = Sockets;
