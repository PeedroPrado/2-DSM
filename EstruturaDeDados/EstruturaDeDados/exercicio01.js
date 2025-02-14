"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync = require("prompt-sync");
var prompt = prompt_sync();
var nome = prompt("Digite o seu nome:");
switch (nome) {
    case "Ana":
        console.log("Ana");
        break;
    case "Antonio":
        console.log("Antonio");
        break;
    case "Pedro":
        console.log("Pedro");
        break;
    default:
        console.log("Nenhuma das opções");
}
