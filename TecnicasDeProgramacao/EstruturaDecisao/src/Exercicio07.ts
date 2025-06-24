// Dado três valores X, Y, Z, verificar se eles podem ser os comprimentos dos lados de um triângulo, 
// e se forem, verificar se é um triângulo equilátero, isósceles ou escaleno. 
// Se eles não formarem um triângulo, escrever uma mensagem no console informando isso. 
// Antes da elaboração do script, torna-se necessária a revisão de algumas propriedades e definições:
// Propriedade – Para que seja possível formar um triângulo, o comprimento de cada lado deve ser menor 
// do que a soma dos comprimentos dos outros dois lados.
// Definição 1 - Chama-se triângulo equilátero os que tem os comprimentos dos três lados iguais; 
// Definição 2 - Chama-se triângulo isósceles o triângulo que tem os comprimentos de dois lados iguais;
// Definição 3 - Chama-se triângulo escaleno ao triângulo que tem os comprimentos dos três lados diferentes.

var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lados: number[] = [];
let i: number = 0;

function perguntar() {
    leitor.question(`Informe comprimento do ${i+1}º lado: `, function (answer: string) {
        lados[i] = parseInt(answer);
        i++;
        if (i < 3) {
            perguntar(); // Chama a função novamente para 
            // continuar perguntando
        } else {
            console.log(">>> Medidas do Triângulo <<<");
            console.log("Comprimento do 1º Lado: ",lados[0]);
            console.log("Comprimento do 2º Lado: ",lados[1]);
            console.log("Comprimento do 3º Lado: ",lados[2]);
            if(lados[0]<lados[1]+lados[2] && lados[1]<lados[0]+lados[2] && lados[2]<lados[0]+lados[1]){
                if(lados[0]==lados[1] && lados[0]==lados[2]){
                    console.log("É um triângulo equilátero.");
                } else if(lados[0]==lados[1] || lados[0]==lados[2] || lados[1]==lados[2]){
                    console.log("É um triângulo isósceles.");
                } else {
                    console.log("É um triângulo escaleno.");
                }
            } else {
                console.log("Os comprimentos dos lados informados, não permitem formar um Triângulo!");
            }
            leitor.close();
        }
    });
}

perguntar(); // Inicia o processo de perguntas

export {};