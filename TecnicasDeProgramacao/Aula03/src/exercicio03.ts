class Um {
    nro: number = 0;
    incrementar(): void {
        this.nro++;
    }
}
class Dois extends Um {
    incrementar(): void {
        super.incrementar();
        this.nro += 2;
    }
}
class Tres extends Dois {
    incrementar(): void {
        super.incrementar();
        this.nro += 3;
    }
}
const teste = new Tres();
teste.incrementar();
console.log("Nro:", teste.nro);