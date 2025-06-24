import { Pilha } from "./types/tipos";

const pilha = new Pilha<string>();

pilha.push("Ana");
pilha.push("Pedro");
pilha.push("Luiz");
pilha.push("Maria");

let item = pilha.pop();
while (item) {
    console.log(item);
    item = pilha.pop();
}