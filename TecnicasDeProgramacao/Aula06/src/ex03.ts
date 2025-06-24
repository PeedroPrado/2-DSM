class AleatorioError extends Error {
    constructor(message: string, public nro: number) {
        super(message);
    }
}
function aleatorio(): number {
    const nro = Math.floor(Math.random() * 10);
    if (nro % 2 === 0) {
        return nro;
    }
    throw new AleatorioError("Número ímpar", nro);
}
function arrayAleatorio(quantidade: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < quantidade; i++) {
        try{
            array.push(aleatorio());
        } catch (e:any) {
            array.push(e.nro*10);
        }
    }
    return array;
}
const vet = arrayAleatorio(8);
console.log("Array:", vet);
console.log("Fim do programa");