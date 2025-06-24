// Escreva um script que atribua a uma variável “letra” uma letra do alfabeto. 
// O script deverá informar ao usuário, se trata-se de uma vogal ou uma consoante.

var letra: string = "b";
switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(`A letra informada "${letra}" é uma vogal!`);
        break;
    default:
        console.log(`A letra informada "${letra}" é uma consoante!`);
}