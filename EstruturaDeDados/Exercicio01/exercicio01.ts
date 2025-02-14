import * as prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

let nome = prompt("Digite o seu nome:")

switch (nome) {
    case "Ana":
        console.log("Ana");
        break;
    case "Antonio":
        console.log("Antonio");
        break;
    case "Pedro":
        console.log("Pedro")
        break;

    default:
        console.log("Nenhuma das opções");
    }