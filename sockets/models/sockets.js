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
			//connection event

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
				console.log(carro, 'si es merengue');
				console.log(new Carga(carro.id, carro.conductor, infoCarga));
			});

			socket.on('info-sona', (objSona) => {
				console.log(objSona);
				//peticionPostCongestions(objSona);
				// -------

				//  fetch('https://7a226e8f6920.ngrok.io/api/congestions/', {
				//      method: 'POST',
				//      body: objSona
				//
				//   });

				//axios.get('https://984b11671680.ngrok.io/api/congestions/')
				//.then(response => {
				//console.log(response.data)
				//})
				//.catch(error => {
				//console.log(error)
				//});

				axios.post('https://984b11671680.ngrok.io/api/congestions/', objSona)
					.then((response) => {
						console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			});

			socket.on('marcador-nuevo', (marcador) => {
				this.marcadores.agregarMarcador(marcador);
				console.log(marcador);
				socket.broadcast.emit('marcador-nuevo', marcador);
			});

			socket.on('marcador-actualizado', (marcador) => {
				this.marcadores.actualizarMarcador(marcador);
				socket.broadcast.emit('marcador-actualizado', marcador);
			});

			socket.on('sona-nueva', (sona) => {
				if (!(sona.type === null || sona.type === undefined || !sona.type)) {
					this.sonas.agregarSona(sona);
					console.log(this.sonas, 'sonasss');
					console.log(sona, ' desde sk');
					socket.broadcast.emit('sona-nueva', sona);
				}
			});
		});
	};
}

module.exports = Sockets;
