// gera um número inteiro aleatório no intervalo [0,99]
const aleatorio = () => Math.floor(Math.random() * 100);
// gera um array de números aleatórios
const aleatorios = (quantidade: number): number[] => {
    const res = [];
    for (let i = 0; i < quantidade; i++) {
        // obtém um número aleatório e coloca no final do array
        res.push(aleatorio());
    }
    return res;
}
console.log("5 números aleatórios:", aleatorios(5));
console.log("3 números aleatórios:", aleatorios(3));
