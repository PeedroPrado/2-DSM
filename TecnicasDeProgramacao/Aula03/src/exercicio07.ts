class Veiculo {
    valor: number;
    constructor(valor: number) {
        this.valor = valor;
    }
    print(): void {
        console.log(`${this.valor}`);
    }
}
class Automovel {
    fabricante: string;
    valor: number;
    constructor(fabricante: string, valor: number) {
        this.fabricante = fabricante;
        this.valor = valor;
    }
    print(): void {
        console.log(`${this.fabricante} - ${this.valor}`);
    }
}
class Cavalo {
    raca: string;
    valor: number;
    constructor(raca: string, valor: number) {
        this.raca = raca;
        this.valor = valor;
    }
    print(): void {
        console.log(`${this.raca} - ${this.valor}`);
    }
}
const auto = new Automovel("GM", 12500);
auto.print();
const cavalo = new Cavalo("Mangalarga", 4500);
cavalo.print();
