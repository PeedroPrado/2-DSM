// exercicio08.ts


const number: number[] = [];
for (let i = 0; i < 20; i++) {
  const aleatorio = Math.floor(Math.random() * 100) + 1;
  number.push(aleatorio);
}


number.sort((a, b) => a - b);


console.log('Vetor ordenado:', number);
