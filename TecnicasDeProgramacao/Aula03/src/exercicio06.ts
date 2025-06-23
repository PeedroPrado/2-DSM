class Matematicaa {
    nro: number;
  
    constructor(nro: number) {
      this.nro = nro;
    }
  
    // Método calcular na superclasse, mas será sobrescrito nas subclasses
    calcular(): void {
      // Método base, não implementado na superclasse, será sobrescrito nas subclasses
    }
  }
  
  class Multiplicarr extends Matematica {
    // Sobrescrevendo o método calcular na classe Multiplicar
    calcular(): void {
      for (let i = 0; i <= 10; i++) {
        console.log(`${this.nro} * ${i} = ${this.nro * i}`);
      }
    }
  }
  
  class Somarr extends Matematica {
    // Sobrescrevendo o método calcular na classe Somar
    calcular(): void {
      for (let i = 0; i <= 10; i++) {
        console.log(`${this.nro} + ${i} = ${this.nro + i}`);
      }
    }
  }

  class Subtrair extends Matematica{
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
        console.log(`${this.nro} - ${i} = ${this.nro - i}`);
      }
    }
  }
    
  
  // Criando um objeto da classe Somar e chamando calcular
  const x: Matematica = new Somar(5);
  a.calcular();
  
  // Criando um objeto da classe Multiplicar e chamando calcular
  const y: Matematica = new Multiplicar(5);
  b.calcular();

  const p: Matematica = new Subtrair(10);
  p.calcular();
  