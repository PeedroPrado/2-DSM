class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x
        this.y = y 
    }

        distancia (ponto: Ponto): number{
            const dx = ponto.x - this.x;
            const dy = ponto.y - this.y;
            return Math.sqrt(dx ** 2 + dy ** 2)
        }

}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log("Distância:", a.distancia(b));