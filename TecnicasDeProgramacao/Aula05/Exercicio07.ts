import { Carro } from "./types/tipos";

class Uno implements Carro{
    constructor(consumo: number, velocidade: number, coeficiente: number){
        this.consumo = consumo
        this.velocidade = velocidade
        this.coeficiente = coeficiente;
    }
    consumo:number;
    gasto(Distância:number): number{
        return Distância/this.consumo
    }
    velocidade: number;
    coeficiente: number;
    frenagem(): number {
        return this.velocidade**2/250*this.coeficiente
    }
}

const uno = new Uno(12.5, 90, 1);
console.log(`Gasto para percorrer 100km: ${uno.gasto(100)} litros`);
console.log(`Distância percorrida ao frear o carro: ${uno.frenagem()} metros`);