let counter = 1

for (i = 0; i < 3; i++) {
	document.write(`<table border="1px"><tbody>`)
	for (a = 0; a < 3; a++) {
		document.write(`<tr>`)
		for(j = 0; j < 3; j++){
			document.write(`<td>${counter}</td>`)
			counter++
		}
		document.write(`</tr>`)
	}
	document.write(`</tbody></table><br>`)

}