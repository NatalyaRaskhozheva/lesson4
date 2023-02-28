let sum;
let N = parseInt(prompt(`Введіть кількість тижнів`, '0'))
sum = 0;
for (let i = 1; i <= N; i++) {
	for (let a = 1; a <= 7; a++) {
		let profit = parseFloat(prompt(`Введіть прибуток за ${a} день ${i} тижня`))
		sum = sum + profit
	}
	document.write(`Прибуток тижня ${i} - ${sum}<br>`)
}