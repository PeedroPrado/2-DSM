let peso: number, altura: number, imc: number

peso = 90;
altura = 1.75;

imc = peso / Math.pow(altura, 2);
console.log("Seu imc é: ", imc)
if (imc <= 18.5){
    console.log("Abaixo do peso ideal")
} else {
    if (imc <= 24.9){
        console.log("Dentro do peso ideal")
    } else{
        if(imc <= 29.9){
            console.log("Acima do peso ideal")
        } else{
            if ( imc <= 34.9){
                console.log("Obesidade grau I")
            } else{
                if (imc <= 39.9){
                    console.log("Obsedidade Grau II")
                } else {
                    console.log("Obesidade Grau III")
                }
            }
        }
    }
}