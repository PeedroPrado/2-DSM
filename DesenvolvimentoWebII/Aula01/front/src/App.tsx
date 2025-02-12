function App() {
  return <Carro />;
}

export default App;

function Carro() {
  const marcas = [
    { marca: "Ford", modelo: "Ka", placa: "abc1234", cor:"red" },
    { marca: "GM", modelo: "Onix", placa: "xyz4090", cor:"blue" },
    { marca: "Fiat", modelo: "Uno", placa: "opt9087", cor:"green" },
    { marca: "VW", modelo: "Gol", placa: "rty2002", cor:"palegreen" },
  ];
  return marcas.map(function (item, indice) {
    return (
      <div style={{ backgroundColor: item.cor }} key={indice}>
        <div>Marca: {item.marca}</div>
        <div>Modelo: {item.modelo}</div>
        <div>Placa: {item.placa}</div>
      </div>
    );
  });
}
