var num: number [] = Array (5)

for (let x: number = 0; x < 5; x++){
    num[x] = Math.floor(Math.random() * 100 + 1)
}

for (let x:number = 0; x < 5; x++){
    console.log("Posição: ", x, "Valor: ", num[x])
}