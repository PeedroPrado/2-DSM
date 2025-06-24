import { Imc } from "./types/tipos";

 class Pessoa extends Imc {
    classificacao(): string {
         if (this.getImc() < 18.5) {
            return "Abaixo do peso"
        } else if (this.getImc() < 24.9) {
            return "Peso normal"
        } else if (this.getImc() < 29.9) {
            return "Sobrepeso"
        } else if (this.getImc() < 34.9) {
            return "Obesidade grau I"
        } else if (this.getImc() < 39.9) {
            return "Obesidade grau II"
        } else {
            return "Obesidade grau III (obesidade mórbida)"
        }
    }
}

const pessoa = new Pessoa(70, 1.62);
console.log("IMC:", pessoa.getImc());
console.log("Classificação:", pessoa.classificacao());