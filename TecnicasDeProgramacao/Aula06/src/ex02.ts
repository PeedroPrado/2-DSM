function aleatorio(): number {
    const nro = Math.floor(Math.random() * 10);
    if (nro % 2 === 0) {
        return nro;
    }
    throw new Error("Número ímpar");
}
function arrayAleatorio(quantidade: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < quantidade; i++) {
        try{
            array.push(aleatorio());
        } catch (e:any){}
    }
    return array;
}
const vet = arrayAleatorio(8);
console.log("Array:", vet);
console.log("Fim do programa");

export {};