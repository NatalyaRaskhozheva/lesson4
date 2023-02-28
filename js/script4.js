//let a = 0//рядки
//let i = 1//комірки

document.write(`<table border="1px"><tbody>`)
for (let y=0; y < 3; y++) {
	document.write(`<tr>`)
	for (let o=1; o <= 7; o++){
		document.write(`<td>${o}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`</tbody></table><br>`)

document.write(`<table border="1px"><tbody>`)
let a = 0
while (a < 3) {
	document.write(`<tr>`)
	a++
	let i = 1
	while (i<=7) {
		document.write(`<td>${i}</td>`)
		i++
	}
	document.write(`</tr>`)
}
	document.write(`</tbody></table>`)