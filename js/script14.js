let price = Math.floor(Math.random() * (100 - 1) + 1)
alert(`Вам треба сплатити ${price} грн`)
let money = 0
let difference

for (let i = 0; i < Infinity; i++){
	money = parseFloat(prompt('Внесіть гроші', '0'))
	difference = price - money
	price = difference
	if(price <= 0){
		alert(`Грошей достатньо!`)
		break
	}
	alert(`Грошей недостатньо! Внесіть ще ${price}`)
}
