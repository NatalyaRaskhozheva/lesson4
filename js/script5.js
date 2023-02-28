
let counter = 1

document.write(`<table border= "1px"><tbody>`)
for (i = 0; i < 3; i++) {
	document.write(`<tr>`)
	for (a = 0; a < 3; a++){
		document.write(`<td>${counter}</td>`)
		counter++
	}
		document.write(`</tr>`)
}
document.write(`</tbody></table>`)