import Geometria from "./types/tipos"



class Retangulo implements Geometria {
    constructor(private base: number, private altura: number) {
    }

    area(): number {
        return this.base * this.altura;
    }

    perimetro(): number {
        return this.base * 2 + this.altura * 2;
    }
}

class Circulo implements Geometria {
    constructor(private raio: number) {
    }

    area(): number {
        return Math.PI * this.raio ** 2;
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Área do retângulo:", geom.area());
console.log("Perímetro do retângulo:", geom.perimetro());
geom = new Circulo(5);
console.log("Área do círculo:", geom.area());
console.log("Perímetro do círculo:", geom.perimetro());