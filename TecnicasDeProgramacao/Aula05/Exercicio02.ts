import { Retangulo , Ponto} from "./types/tipos";

const ie: Ponto = {
    x: 1,
    y: 2
};
const df: Ponto = {
    x: 3,
    y:4
}

const retangulo: Retangulo = {
    infEsquerdo: ie,
    supDireito: df
}

console.log(retangulo)