class Operacao {
    x?: number;
    y?: number;
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    somar(): number | undefined {
        if (this.x !== undefined && this.y !== undefined) {
            return this.x + this.y;
        }
        return undefined;
    }
}
const op = new Operacao();
// as propriedades ainda não foram inicializadas 
console.log("x + y: ", op.somar());

// atribui valores as propriedades x + y 
op.setX(5);
op.setY(4);
console.log("x + y ", op.somar());