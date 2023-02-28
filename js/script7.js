let N = parseFloat(prompt(`Введіть кількість абзаців`, '0'))


for (h = 1; h <= N; h++) {
	document.write(`<h1>Заголовок ${h}</h1>`)
	for(p = 1; p <= N; p++) {
		document.write(`<p>Розділ ${h}, параграф ${p}</p>`)
		if(p == h) {
			break
		}
	}
}