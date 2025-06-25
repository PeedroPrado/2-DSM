
const entrada = prompt('Digite o tamanho n da matriz quadrada (ex: 3 para 3×3):') || '0';
const n = parseInt(entrada);
if (isNaN(n) || n <= 0) {
  console.error('Dimensão inválida. Insira um número inteiro positivo.');
} else {
  
  const matrizOriginal: number[][] = [];
  for (let i = 0; i < n; i++) {
    const linha: number[] = [];
    for (let j = 0; j < n; j++) {
      linha.push(Math.floor(Math.random() * 100) + 1);
    }
    matrizOriginal.push(linha);
  }

  const primeiraLinha = matrizOriginal[0];

  
  const matrizSoma: number[][] = matrizOriginal.map((linha, i) =>
    linha.map((valor, j) => valor + primeiraLinha[j])
  );

  console.log('Matriz original:');
  console.table(matrizOriginal);

  console.log('Matriz após somar a primeira linha a todas as linhas:');
  console.table(matrizSoma);
}
