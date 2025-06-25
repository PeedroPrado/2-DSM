var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin, output: process.stdout
});

var num: number = 0;
var primos: number[] = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

leitor.question("Digite um número inteiro: ", function (answer: string) {
    num = parseInt(answer);
    console.log("O número digitado: ",num,isPrimo(num)?"é":"não é","primo.")
    if(!isPrimo(num)){
        console.log("<< Fatorando >>");
        for(let n of primos ){
            while(num%n==0){
                console.log(num,"==> Fator: ",n);
                num /= n;
            }
        }
    }
    leitor.close();
});

function isPrimo(n: number): boolean {
    for (var divisor = 2; divisor < n; divisor++)
        if (n % divisor == 0) return false;
    return true;
}