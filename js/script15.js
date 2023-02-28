let sum = 0
let totalDay = 0
for (let i = 1; i <= 12; i++) {
	let confirmMonth = window.confirm(`Продовжити обчислення? Місяць ${i}`)
	if (confirmMonth === false) {
		break;
	}
	for (let a = 1; a <= 30; a++) {
		let indicator = parseInt(prompt(`Місяць ${i}, день ${a}. Введіть значення`))
		totalDay++
		sum = sum + indicator
		let confirmDay = window.confirm(`Продовжити цей місяць?`)
		if (confirmDay === false) {
			break;
		}
	}
}
let averageValue = sum / totalDay
document.write(`Середнє значення введених даних ${averageValue}`)
