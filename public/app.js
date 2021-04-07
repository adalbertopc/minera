const socket = io('https://ff8bd5136bbb.ngrok.io');
socket.emit('connection', 'hello');
const btnMoveCar = document.querySelector('.move-car');

let carPosition = { x: 0, y: 50 };
if (btnMoveCar) {
	btnMoveCar.addEventListener('click', () => {
		carPosition = { x: (carPosition.x += 10), y: 50 };
		socket.emit('move-car-forward', carPosition);
	});
}
socket.on('car-movement-history', (args) => {
	const newRow = document.createElement('tr');
	newRow.innerHTML = `<td>${args.x}</td><td>${args.y}</td>`;
	document.querySelector('.table tbody').appendChild(newRow);
});

//Traffic lights
let trafficLight1 = {
	id: 1,
	state: false,
};

let trafficLight2 = {
	id: 2,
	state: false,
};

const circles1 = document.querySelectorAll('.traffic-light--1 .circle');
const circles2 = document.querySelectorAll('.traffic-light--2 .circle');
const trafficLight1Btn = document.querySelector('.traffic-light__button--1');
const trafficLight2Btn = document.querySelector('.traffic-light__button--2');

trafficLight1Btn.addEventListener('click', () => {
	socket.emit('change-traffic-light', trafficLight1);
});

trafficLight2Btn.addEventListener('click', () => {
	socket.emit('change-traffic-light', trafficLight2);
});

socket.on('update-traffic-lights', (args) => {
	const { id } = args;
	console.log(args);
	if (id === 1) {
		trafficLight1 = args;
		circles1[!trafficLight1.state ? 1 : 0].className = 'circle';
		const currentLight = circles1[trafficLight1.state ? 1 : 0];
		currentLight.classList.add(currentLight.getAttribute('color'));
	} else if (id === 2) {
		trafficLight2 = args;
		circles2[!trafficLight2.state ? 1 : 0].className = 'circle';
		const currentLight = circles2[trafficLight2.state ? 1 : 0];
		currentLight.classList.add(currentLight.getAttribute('color'));
	}
});
