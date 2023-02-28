let number = parseInt(prompt('Загадайте число!', '0'))
document.write(`${number}<br>`)

for (i = 0; i < 3; i++) {
	let numberRandom = Math.floor(Math.random() * (100 - 1) + 1);
	let confirm = window.confirm(`Ви загадали число ${numberRandom}. Вірно?`)
	if(confirm == true){
		alert(`Я вгадав!`)
		break;
	}
	if(i == 2){
		alert(`Я НЕ ВГАДАВ ЧИСЛО!`)
	}
}