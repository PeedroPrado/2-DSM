class Opeeracao {
    p?: number;
    n?: number;
    
    constructor (p?:number, n?: number){
        this.p = p;
        this.n = n;
    }
somar(): number | undefined{
    if (this.p !== undefined && this.n !== undefined){
        return this.p + this.n;
    }
    return undefined;
}
}

const a = new Opeeracao(); 
console.log("x + y:", a.somar()); 
const b = new Opeeracao(5); 
console.log("x + y:", b.somar()); 
const c = new Opeeracao(5 , 3); 
console.log("x + y:", c.somar()); 