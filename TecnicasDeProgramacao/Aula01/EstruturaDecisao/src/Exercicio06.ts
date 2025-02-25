// Importando o módulo 'readline' que permite interagir com o usuário no terminal.
var readline = require('readline');

// Criando uma interface para capturar entrada e saída no terminal.
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definindo um formato para mostrar o percentual (em formato 'pt-br' com 2 casas decimais).
var percentual = new Intl.NumberFormat("pt-br", {
    style: "percent",
    minimumFractionDigits: 2,
});

// Definindo um formato para mostrar o valor em moeda brasileira (R$)
var formatar = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
});

// Declarando a variável 'salario' que armazenará o salário fornecido pelo usuário.
var salario: number = 0;

// Perguntando ao usuário qual é o salário e aguardando a resposta.
leitor.question("Informe seu salário R$:\n", function (answer: string) {
     // Convertendo a resposta do usuário (que é uma string) para número do tipo float.
    var salario = parseFloat(answer);
    // Definindo a variável 'perc' que irá armazenar o percentual de aumento do salário
    var perc: number = 0;

// Condicional que define o percentual de reajuste baseado no valor do salário.
    if (salario <= 650) {
        perc = 0.1; // Se o salário for menor ou igual a R$ 650, o aumento será de 10% (0.1).
    } else {
        perc = 0.05 // Se o salário for maior que R$ 650, o aumento será de 5% (0.05).
    }

// Calculando o valor do reajuste, multiplicando o salário pelo percentual.
    var reajuste: number = salario * perc;

// Calculando o novo salário, somando o salário atual com o reajuste.
    var novosalario: number = salario + reajuste;

// Exibindo os resultados formatados, com o percentual, o salário atual, o reajuste e o novo salário.
    console.log("Percentual de Reajuste....:", percentual.format(perc));
    console.log("(+) Salário Atual.........:", formatar.format(salario));
    console.log("(+) Reajuste..............:", formatar.format(reajuste));
    console.log("(=) Salário Novo..........:", formatar.format(novosalario));
    
// Fechando a interface de leitura após a interação
    leitor.close();
});