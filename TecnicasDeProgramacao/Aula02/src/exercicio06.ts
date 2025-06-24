class Operacao{
    x: number;
    y: number;

    constructor(x: number, y:number){
        this.x = 3
        this.y = 5
    }
        somar(): number {
            return this.x + this.y
        };

        subtrair(): number{
            return this.x - this.y
        }
        dividir(): number {
            if (this.y === 0) {
              console.log("Erro: Divisão por zero!");
              return NaN; // Retorna 'NaN' em caso de tentativa de divisão por zero
            }
            return this.x / this.y;
          }
        }

const op = new Operacao(3,5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());