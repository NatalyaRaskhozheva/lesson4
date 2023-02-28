let number = parseFloat(prompt('Загадайте число!', '0'))

for(i = 0; i < Infinity; i++) {
	let numberRandom = Math.floor(Math.random() * (100 - 1) + 1);
	let confirm = window.confirm(`Ви загадали число ${numberRandom}. Вірно?`)
	if(confirm == true){
		alert(`Я вгадав!`)
		break;
	}
	
}