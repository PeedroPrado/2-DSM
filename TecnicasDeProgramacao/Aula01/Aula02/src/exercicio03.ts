class Aleatorio {
    get(): number {return Math.floor(Math.random() * 100 + 1);
        }
}
const aleatorio = new Aleatorio();

for (let i = 0; i < 5; i++){
    console.log(aleatorio.get())
}
