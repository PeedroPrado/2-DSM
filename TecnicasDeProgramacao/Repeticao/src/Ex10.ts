var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin, output: process.stdout
});

var cont: number = 1;
let num: number = 0;
let maior:number = 0;
let menor:number = 100;
let soma:number = 0;
let numeros: number[] = new Array<number>;

function perguntar() {
    leitor.question(`Digite o ${cont}º número inteiro entre [1 e 100]: `, function (answer: string) {
        num = parseInt(answer);
        if (numeros.includes(num)) {
            console.log(`O ${cont}º número: ${num} já foi informado. Digite novamente...`);
        } else {
            if (num > maior) {
                maior = num;
            }
            if (num < menor) {
                menor = num;
            }
            numeros.push(num);
            soma += num;
            cont++;
        }
        if (cont < 11) {
            perguntar(); // Chama a função novamente para continuar perguntando
        } else {
            console.log("O menor número digitado foi:",menor);
            console.log("O maior número digitado foi:",maior);
            console.log("A somatória dos números digitados foi:",soma);
            console.log("Listando números informados em ordem crescente:");
            numeros.sort(function(a, b){return a-b});
            console.log(numeros);
            leitor.close();
        }
    });
}

perguntar();

export default{};