function stringCompare(a: string, b: string): boolean {
    return a.localeCompare(b) > 0;
}

function numberCompare(a: number, b: number): boolean {
    return a > b;
}


function bubbleSort<T>(array: T[],f:(a: T, b: T) => boolean): T[] {
    const n = array.length;
    let trocou = true, temp:T;
    while (trocou) {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (f(array[i], array[i + 1])) {
                // troca os itens
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                trocou = true;
            }
        }
    }
    return array;
}

const numeros = [8, 6, 2, 9, 1, 3];
console.log(bubbleSort(numeros,numberCompare));
const palavras = ["banana", "mamão", "abacaxi", "limão", "atemoia"];
console.log(bubbleSort(palavras,stringCompare));