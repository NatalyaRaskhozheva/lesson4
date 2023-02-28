let numberOne = 0
let numberSecond = 0
let numberThree = 0
let numberFour = 0

for (let i = 0; i < 3; i++) {
	let number = Math.floor(Math.random() * (4 - 1) + 1)
	//document.write(`${number}<br>`)
	switch (number) {
		case 1: document.write(`<img width="40px" src="../img/01.jpg">`);
			numberOne++
			break;
		case 2: document.write(`<img width="40px" src="../img/02.jpg">`);
			numberSecond++
			break;
		case 3: document.write(`<img width="40px" src="../img/03.jpg">`);
			numberThree++
			break;
		case 4: document.write(`<img width="40px" src="../img/04.jpg">`);
			numberFour++
			break;
	}
}
if (numberOne == 3) {
	document.write(`<br>Ви виграли 100 грн`)
}
else if (numberSecond == 3) {
	document.write(`<br>Ви виграли 200 грн`)
}
else if (numberThree == 3) {
	document.write(`<br>Ви виграли 500 грн`)
}
else if (numberFour == 3) {
	document.write(`<br>Ви виграли 1000 грн`)
}
else document.write(`<br>Ви нічого не виграли`)



