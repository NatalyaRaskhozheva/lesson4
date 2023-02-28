let minNumber = parseInt(prompt('Введіть мінімальне число', '0'))
let maxNumber = parseInt(prompt('Введіть максимальне число', '0'))
let sum = 0;

for (i = minNumber; i <= maxNumber; i++) {
	if (i % 2 !== 0) {
		sum = sum + i
	}
}
document.write(`Сума ${sum}`)
