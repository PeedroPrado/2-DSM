/* Uma empresa dará um aumento de salário aos seus funcionários de acordo com a categoria de cada empregado.
 O aumento seguirá a seguinte as seguintes regras:

a)	 Categorias A, C, F, e H ganharão 10% de aumento sobre o salário
b)	 Categorias B, D, E, I, J e T ganharão 15% de aumento sobre o salário
c)	 Categorias K e R ganharão 25% de aumento sobre o salário
d)	 Categorias L, M, N, O, P, Q e S ganharão 35% de aumento sobre o salário
e)	 Categorias U, V, X, Y, W e Z ganharão 50% de aumento sobre o salário

Faça um script que solicite ao usuário que informe o nome, categoria e salário de um empregado. 
Seguindo a tabela acima, utilize a estrutura switch/case para calcular o reajuste correto e mostrar no
 console os dados informados do empregado mais o salário reajustado.
*/

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var percentual = new Intl.NumberFormat("pt-br", {
    style: "percent",
    minimumFractionDigits: 2,
});

var formatar = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
});

let legendas: string[] = ["o nome do funcionário", "sua categoria", "o salário"];
let dados: string[] = [];
let i: number = 0;

function perguntar() {
    leitor.question(`Informe ${legendas[i]}: `, function (answer: string) {
        dados[i] = answer;
        i++;
        if (i < 3) {
            perguntar(); // Chama a função novamente para continuar perguntando
        } else {
            console.log("\n>>> Dados do Funcionário <<<");
            console.log(`Nome: ${dados[0]}`)

            var salario = parseFloat(dados[2]);
            var perc: number = 0;

            switch (dados[1]) {
                case "A":
                case "C":
                case "F":
                case "H":
                    perc = 0.1;
                    break;
                case "B":
                case "D":
                case "E":
                case "I":
                case "J":
                case "T":
                    perc = 0.15;
                    break;
                case "K":
                case "R":
                    perc = 0.25;
                    break;
                case "L":
                case "M":
                case "N":
                case "O":
                case "P":
                case "Q":
                case "S":
                    perc = 0.35;
                    break;
                case "U":
                case "V":
                case "X":
                case "Y":
                case "W":
                case "Z":
                    perc = 0.5;
                    break;
                default:
                    console.log("Passou aqui...");
            }
            
            var reajuste: number = salario * perc;
            var novosalario: number = salario + reajuste;

            console.log("Percentual de Reajuste....:", percentual.format(perc));
            console.log("(+) Salário Atual.........:", formatar.format(salario));
            console.log("(+) Reajuste..............:", formatar.format(reajuste));
            console.log("(=) Salário Novo..........:", formatar.format(novosalario));
            leitor.close();
        }
    });
}

perguntar();