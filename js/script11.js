let minNumber = parseInt(prompt('Введіть мінімальне число', '0'))
let maxNumber = parseInt(prompt('Введіть максимальне число', '0'))
let sum = 0
let counter = 0
for (let i = minNumber; i <= maxNumber; i++) {
	if (i % 2 !== 0) {
		sum = sum + i
		counter++
	}
	if (counter == 5) break
}
document.write(`Сума ${sum}`)