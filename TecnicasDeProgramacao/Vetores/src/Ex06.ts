
const qtdAlunos = 5;
const names: string[]   = [];
const notas: [number, number][] = [];  // cada par: [nota1, nota2]
const medias: number[]  = [];

for (let i = 0; i < qtdAlunos; i++) {
  // 1) Lê nome
  const names = prompt(`Nome do aluno ${i + 1}:`) || `Aluno${i + 1}`;
  nomes.push(names);

  // 2) Lê notas 1 e 2
  const n1 = parseFloat(prompt(`Nota 1 de ${names}:`)  || '0');
  const n2 = parseFloat(prompt(`Nota 2 de ${names}:`)  || '0');
  notas.push([isNaN(n1) ? 0 : n1, isNaN(n2) ? 0 : n2]);

  // 3) Calcula média
  medias.push((notas[i][0] + notas[i][1]) / 2);
}

// 4) Exibe resultado no console
console.log('=== Médias dos Alunos ===');
for (let i = 0; i < qtdAlunos; i++) {
  console.log(
    `${nomes[i]} → ` +
    `Nota1: ${notas[i][0].toFixed(1)}, ` +
    `Nota2: ${notas[i][1].toFixed(1)}, ` +
    `Média: ${medias[i].toFixed(2)}`
  );
}
