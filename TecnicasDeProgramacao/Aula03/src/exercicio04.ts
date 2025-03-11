class Carro {
    marca?: string;
    modelo?: string;
    ano?: number;

    constructor(marca: string, modelo: string, ano: number);
    constructor(marca: string, modelo: string);
    constructor();

    constructor(marca?: string, modelo?: string, ano?: number) {
        if (marca && modelo && ano) {
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
        } else
            if (marca && modelo) {
                this.marca = marca;
                this.modelo = modelo;
            }
    }

    print(): void {
        console.log(this);
    }
}

const g = new Carro("VW", "Gol", 2010);
g.print();
const f = new Carro("Fiat", "Uno");
f.print();
const v = new Carro();
v.print();
