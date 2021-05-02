class Sonas {
	constructor() {
		this.activos = [];
	}

	agregarSona(sona) {
		this.activos.push(sona);
		return sona;
	}
}

module.exports = Sonas;
