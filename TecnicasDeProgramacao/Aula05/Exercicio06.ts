import {Pilha, Ponto} from "./types/tipos";

const pilha = new Pilha<Ponto>();

pilha.push({x: 4, y: 5});
pilha.push({x: 3, y: 4});
pilha.push({x: 2, y: 3});
pilha.push({x:1, y: 2});

let item = pilha.pop();

while(item){
    console.log(item);

    item = pilha.pop();
}