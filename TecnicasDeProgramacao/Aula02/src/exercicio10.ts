class Circulo{
    raio: number
    constructor(raio: number){
        this.raio = raio;
    }
    area(): number{
        return Math.PI * (this.raio ** 2);
    }
    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
} 

const circulo = new Circulo(5);
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());