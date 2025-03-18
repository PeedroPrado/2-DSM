
import Veiculo from "./Veiculo";

class Carro extends Veiculo {
    portas: number;
    cambio: string;

    constructor(id:number, marca: string, modelo: string, portas: number, cambio: string, ano?: number){
        super(id, marca, modelo, ano);
        this.portas = portas;
        this.cambio = cambio;
    }
