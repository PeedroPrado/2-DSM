const parImpar:Function = (nro:number):string => nro % 2 == 0 ? "par" : "ímpar";
const somarArray:any = (v:any):any => {
for(let i = 0; i < v.length; i++){
console.log(v[i], "é", parImpar(v[i]));
}
}
const v:any = [5, 3, 1, 8, 2];
somarArray(v);