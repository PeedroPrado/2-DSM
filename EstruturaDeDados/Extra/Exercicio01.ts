import { calculaQuadrado, calculaCirculo } from './arq2';
 
type Callback = (valor:number) => number;
 
const calcula = (nome:string, valor:number, calcula_1:Callback, calcula_2:Callback) => {
    if (nome == "quadrado") {
        const areaQuadrado = calcula_1(valor);
        console.log(`A área do quadrado é: ${areaQuadrado}`);
    } else if (nome == "circulo") {
        const areaCirculo = calcula_2(valor);
        console.log(`A área do círculo é: ${areaCirculo.toFixed(2)}`);
    } else {
        console.log("Forma geométrica não reconhecida.");
    }
};
 
calcula("quadrado", 5, calculaQuadrado, calculaCirculo);
calcula("circulo", 3, calculaQuadrado, calculaCirculo);