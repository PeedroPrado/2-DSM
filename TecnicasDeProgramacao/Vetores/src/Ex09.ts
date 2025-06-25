// exercicio09.ts

const vetor: number[] = [];
for (let i = 0; i < 30; i++) {
  vetor.push(Math.floor(Math.random() * 100) + 1);
}

let maiorr = vetor[0];
let menor = vetor[0];
let posMaior = 0;
let posMenor = 0;

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maiorr) {
    maiorr = vetor[i];
    posMaior = i;
  }
  if (vetor[i] < menor) {
    menor = vetor[i];
    posMenor = i;
  }
}

// 3) Mostra tudo no console
console.log('Vetor gerado:', vetor);
console.log(`Maior valor: ${maiorr} (posição ${posMaior})`);
console.log(`Menor valor: ${menor} (posição ${posMenor})`);
