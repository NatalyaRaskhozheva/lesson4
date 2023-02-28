const minNumber = 1
const maxNumber = 100

let total = parseInt(prompt('Скільки разів пройде цикл?'))
let num = 0
while (num < total) {
	let randomNamber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
	document.write(`${randomNamber}<br>`)
	num++
}