var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin, output: process.stdout
});

var vogais: number = 0;
var consoantes: number = 0;

leitor.question("Digite uma palavra: ", function (answer: string) {

    for (let letra of answer) {
        switch (letra) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vogais++;
                break;
            default:
                consoantes++;
        }
    }

    console.log("Palavra digitada:",answer);
    console.log("Possui:",vogais,"vogais.");
    console.log("Possui:",consoantes,"consoantes.");

    leitor.close();

});