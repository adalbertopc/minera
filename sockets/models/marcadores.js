const Marcador = require('./marcador');

class Marcadores {
	constructor() {
		this.activos = [];
	}

	agregarMarcador(marcador) {
		this.activos.unshift(new Marcador(marcador));
	}

	removerMarcador(id) {
		//this.activos[id];
	}

	actualizarMarcador({ id, lng, lat }) {
		this.activos.forEach((element) => {
			if (element.id == id) {
				//console.log("SI ES", lng, lat);
				element.lng = lng;
				element.lat = lat;
			}
		});
	}

	marcadoresActivos() {
		return this.activos;
	}
}

module.exports = Marcadores;
