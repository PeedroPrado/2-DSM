const tempF:number = 150;
const tempC:number = ((tempF - 32)/9)*5;
const formatar = new Intl.NumberFormat("pt-br", {
    style: "decimal",
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
console.log(formatar.format(tempF),"°F = ",formatar.format(tempC),"°C");