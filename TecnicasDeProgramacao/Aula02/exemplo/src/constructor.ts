class Pessoas {
    nome: string;
    idade: number;

    constructor(a: string, b: number) {
        this.nome = a
        this.idade = b
    }
    imprimir() {
        console.log(`${this.nome} possui ${this.idade} anos`);
    }
}
let c = new Pessoas("Pedro", 26)
let d = new Pessoas("Ana", 29)
// chama o metodo imprimir
c.imprimir();
d.imprimir();

