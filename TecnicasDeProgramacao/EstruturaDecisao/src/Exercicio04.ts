var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
leitor.question("Digite os valores para o número total de eleitores do seu municiío: \n", function(answer:number) {
 var idade = answer;

leitor.close();
});