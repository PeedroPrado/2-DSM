const sum = (a:number,b:number):number => a + b;
const dif = (a:number,b:number):number => a - b;
//uma função pode receber outra função como parâmetro
const operacao = (f: (a: number, b: number) => number, a: number, b: number): number => f(a, b);
console.log("5 + 3:", operacao(sum,5,3));
console.log("5 - 3:", operacao(dif,5,3));