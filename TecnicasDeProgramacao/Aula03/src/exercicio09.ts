class Geometria {
    area(): number {
        return 0;
    }
}
class Retangulo extends Geometria {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        super()
        this.base = base;
        this.altura = altura;
    }
    area(): number {
        return this.base * this.altura;
    }
}
class Circulo extends Geometria {
    raio: number;
    constructor(raio: number) {
        super();
        this.raio = raio;
    }
    area(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends Geometria {
    lado: number;
    constructor(lado: number) {
        super();
        this.lado = lado;
    }
    area(): number {
        return this.lado * this.lado;
    }
}
let geom: Geometria = new Retangulo(10, 5);

console.log("Retângulo:", geom.area());

geom = new Circulo(5);
console.log("Círculo:", geom.area());

geom = new Quadrado(4); 
console.log("Quadrado:", geom.area());


