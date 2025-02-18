class Carro {
    marca: string = "";
    modelo: string = "";
    setMarca(marca: string): void {
    this.marca = marca;
    }
    setModelo(modelo: string): void {
    this.modelo = modelo;
    }
    print(): void {
    console.log(`${this.marca} ${this.modelo}`);
    }
    }
// Criar as instâncias
    let carro1 = new Carro ();
    carro1.setMarca("VW");
    carro1.setModelo("Gol");
    
    let carro2 = new Carro();
    carro2.setMarca("Fiat");
    carro2.setModelo("Uno");
// Imprimindo 
    carro1.print();
    carro2.print();