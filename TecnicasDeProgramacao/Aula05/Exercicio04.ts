import { Livro } from "./types/tipos";

class Revista extends Livro {
    constructor(titulo: string, ano: number, private edicao: number) { 
        super(titulo, ano);
        
    }
    print(): void {
        console.log(this.titulo, this.ano, this.edicao);
    }
}

const revista = new Revista ("Superinteressante: O futuro da IA", 2023, 448);
revista.print();
