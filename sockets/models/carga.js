class Carga {
	constructor(idCarro, nombreConductor, { id, material, cantidad, fecha }) {
		this.idCarro = idCarro;
		this.nombreConductor = nombreConductor;
		this.idMaterial = id;
		this.material = material;
		this.cantidad = cantidad;
		this.fechaEntrega = fecha;
	}
}

module.exports = Carga;
