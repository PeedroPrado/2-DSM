class Matematica {
    nro: number;
  
    // Construtor da classe Matematica
    constructor(nro: number) {
      this.nro = nro;
    }
  
    // Método calcular na superclasse, mas será sobrescrito nas subclasses
    calcular(): void {
      // Método base, não implementado na superclasse, será sobrescrito nas subclasses
    }
  }
  
  class Multiplicar extends Matematica {
    // Sobrescrevendo o método calcular na classe Multiplicar
    calcular(): void {
      for (let i = 0; i <= 10; i++) {
        console.log(`${this.nro} * ${i} = ${this.nro * i}`);
      }
    }
  }
  
  class Somar extends Matematica {
    // Sobrescrevendo o método calcular na classe Somar
    calcular(): void {
      for (let i = 0; i <= 10; i++) {
        console.log(`${this.nro} + ${i} = ${this.nro + i}`);
      }
    }
  }
  
  // Criando um objeto da classe Somar e chamando calcular
  const a: Matematica = new Somar(5);
  a.calcular();
  
  // Criando um objeto da classe Multiplicar e chamando calcular
  const b: Matematica = new Multiplicar(5);
  b.calcular();
  