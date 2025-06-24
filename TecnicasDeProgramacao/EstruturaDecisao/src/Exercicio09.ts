// Faça um script que solicite ao usuário que digite um número que represente um determinado mês do ano. 
// Após a leitura escreva por extenso qual o mês lido. Caso o número digitado não esteja na faixa de 1 <= 12 
// escreva uma mensagem no console informando ao usuário do erro na digitação.

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var mes: number = 0;

leitor.question("Informe o nº referente a um mês (1 a 12):\n", function (answer:string) {
    mes = parseInt(answer);
    var mesext = "";

    switch (mes) {
        case 1:
            mesext = "Janeiro";
            break;
        case 2:
            mesext = "Fevereiro";
            break;
        case 3:
            mesext = "Março";
            break;
        case 4:
            mesext = "Abril";
            break;
        case 5:
            mesext = "Maio";
            break;
        case 6:
            mesext = "Junho";
            break;
        case 7:
            mesext = "Julho";
            break;
        case 8:
            mesext = "Agosto";
            break;
        case 9:
            mesext = "Setembro";
            break;
        case 10:
            mesext = "Outubro";
            break;
        case 11:
            mesext = "Novembro";
            break;
        case 12:
            mesext = "Dezembro";
            break;
    }

    if (mes > 0 && mes < 13) {
        console.log(`O número ${mes} informado, corresponde ao mês de: ${mesext}`)
    } else {
        console.log("O número informado não corresponde à um mês válido!");
    }

    leitor.close();
});