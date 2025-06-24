const votosTotais: number = 23742;
const votosBrancos: number = 4577;
const votosNulos: number = 1029;
const votosValidos: number = 18136;

const porcentagemBrancos: number = votosBrancos / votosTotais * 100;
const porcentagemNulos: number = votosNulos / votosTotais * 100;
const porcentagemValidos: number = (votosValidos / votosTotais * 100);

console.log(`Porcentagem de votos brancos: ${porcentagemBrancos} \nPorcentagem de votos nulos: ${porcentagemNulos} \nPorcentagem de votos válidos: ${porcentagemValidos}`);