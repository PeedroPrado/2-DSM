
var salario: number = 4500;
var perc: number = 0.08;
var reajuste: number = salario * perc;
var novosalario: number = salario + reajuste;
var percentual = new Intl.NumberFormat("pt-br", {
  style: "percent",
  minimumFractionDigits: 2,
});
const form = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: 'BRL',
  minimumFractionDigits: 2,
});
console.log("Percentual de Reajuste....:", percentual.format(perc));
console.log("(+) Salário Atual.........:", form.format(salario));
console.log("(+) Reajuste..............:", form.format(reajuste));
console.log("(=) Salário Novo..........:", form.format(novosalario));