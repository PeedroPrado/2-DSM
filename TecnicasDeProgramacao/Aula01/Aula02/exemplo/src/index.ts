class Pessoa {
   nome: string = "Ana"; //corpo da classe (pode conter propriedade, método e construtores)
   idade: number = 18;
// método imprimir
   imprimir (){
    console.log(`${this.nome} possui ${this.idade} anos`)
   }
}
// constroí uma intancia (objeto) do tipo Pessoa
// e coloca na variável x
const x = new Pessoa();

//cria uma instancia (objeto) do tipo Pessoa
// e coloca na variável y
const y = new Pessoa();

// acessa a propriedade nome do objeto que está na variável x
console.log("Nome: ", x.nome, y.nome);

// acessa a propriedade idade do objeto que está na variável x

console.log("Idade", x.idade, y.idade);

// chama o metodo imprimir do objeto que está na variável x
x.imprimir();