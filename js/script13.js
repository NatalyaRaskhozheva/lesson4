let N = parseInt(prompt('Введіть значення N', '1'))
let M = parseInt(prompt('Введіть значення M', '1'))
let K = parseInt(prompt('Введіть кількість снарядів', '0'))
let randomN
let randomM
let coordinateN
let coordinateM
let result


for (let i = 0; i < K; i++) {
	randomN = Math.floor(Math.random() * (N - 1) + 1);
	randomM = Math.floor(Math.random() * (M - 1) + 1);
	coordinateN = parseInt(prompt('Введіть координату поля N', '1'))
	coordinateM = parseInt(prompt('Введіть координату поля M', '1'))
	if ((coordinateN == randomN) && (coordinateM == randomM)) {
		result = 'вгадали'
		break
	}
	result = 'не вгадали'
}
document.write(`Розташування коробля було ${randomN}, ${randomM}. У вас було ${K} спроб і ви ${result}<br>`)





