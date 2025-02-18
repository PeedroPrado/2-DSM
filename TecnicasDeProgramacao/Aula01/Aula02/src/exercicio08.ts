class Point{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x
        this.y = y  
    }
    distance(ponto: Point): number{
        const dx = this.x - ponto.x
        const dy = this.y - ponto.y 
        return Math.sqrt(dx ** 2 + dy ** 2)
    }
}

class Rectangle{
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor(ie:Point, sd:Point){
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd;
    }
    
  // Método para calcular a área do retângulo
  area(): number {
    // Largura é a diferença entre as coordenadas x
    const largura = Math.abs(this.superiorDireito.x - this.inferiorEsquerdo.x);
    // Altura é a diferença entre as coordenadas y
    const altura = Math.abs(this.superiorDireito.y - this.inferiorEsquerdo.y);
    // A área do retângulo é a largura vezes a altura
    return largura * altura;
  }
}

const sd = new Point(3,5);
const ie = new Point(1,2);
//observe que o construtor da classe Rectangle 
//recebe dois objetos do tipo Point como parâmetro
const r = new Rectangle(ie,sd);
console.log("Área:", r.area());