// substitui os termos de busca pelo novo caractere no texto de entrada
const substituir = function (entrada: string, letra: string, novo:string) {
    let res: string [] = [];
    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] === letra) {
            res.push(novo);
        }
        else {
            res.push(entrada[i])
        }
    }
    return res;
};
console.log("Substituir 'a' por '-':", substituir("Mariana", "a", "-"));
console.log("Substituir 'e' por '8':", substituir("Perspectiva", "a", "-"));
